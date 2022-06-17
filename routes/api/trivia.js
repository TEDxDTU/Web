"use strict";

const express = require("express");
const router = express.Router();
const Trivia = require("../../schemas/trivia");
const withAuth = require("../../middleware/auth").withAuth;
const User = require("../../schemas/user");
const mongoose = require("mongoose");
const TriviaContestant = require("../../schemas/triviaContestant");
const admin = require("firebase-admin");

/**
 * Get request that returns a list of all trivias
 */
router.get("/", async (req, res) => {
  try {
    const trivias = await Trivia.find(
      {},
      ["imageUrl", "title", "questionCount", "totalTime", "_id"],
      {
        sort: {
          _createdAt: 1,
        },
      }
    );
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(200).json({ trivias });
    }
    const token = authorization;
    let decodedIdToken;
    try {
      decodedIdToken = await admin.auth().verifyIdToken(token);
      if (!decodedIdToken || !decodedIdToken.uid) {
        return res.status(200).json({ trivias, error: "Not authenticated." });
      }

      req.uid = decodedIdToken.uid;
      const user = await User.findOne({ firebaseID: req.uid }, [
        "triviasAttempted",
      ]);
      console.log(user.trivias);
      return res.status(200).json({
        trivias,
        userData: {
          triviasAttempted: user.triviasAttempted,
        },
      });
    } catch (error) {
      console.log(`verifyIdToken error: ${error}`);
      return res.status(200).json(trivias);
    }
  } catch (err) {
    console.error(err);
    return res.status(200).json({ trivias, error: err.toString() });
  }
});

/**
 * Get request that returns a single trivia, with the specified id
 * @param {string} id - the id of the trivia to return
 * This is an authenticated request, the user must be logged in to make it
 * It also returns the user's details w.r.t to this trivia, namely:
 * hasAttempted: has the user attempted this trivia before
 * userTrivia : the user's score for this trivia, might include more details in future.
 * if hasAttempted is false, userTrivia is not passed.
 * hasAttempted can be true even if userTrivia is not passed, this means the user
 * started to attempt the trivia but did not complete it
 */

router.get("/leaderboard", async (req, res) => {
  const contestants = await TriviaContestant.find({}, null, {
    // Don't use object notation for sort as we need to first
    // sort by points, then by time taken, then by date
    // JavaScript objects are not ORDEREd, so object notation will not work.
    sort: "-points timeTaken createdAt",
    limit: 10,
  });
  console.log(contestants);
  let leaderboard = [];

  for (let i = 0; i < contestants.length; i++) {
    const user = await User.findOne({ firebaseID: contestants[i].userId });
    leaderboard.push({
      name: user.name,
      points: contestants[i].points,
      timeTaken: contestants[i].timeTaken,
      imageURL: user.imageURL,
      university: user.university,
      firebaseID: user.firebaseID,
    });
  }
  // await Promise.all(
  //   contestants.map(async (contestant) => {
  //     const user = await User.findOne({ firebaseID: contestant.userId }, [
  //       "name",
  //       "university",
  //       "imageURL",
  //       "firebaseID",
  //     ]);
  //     // const trivia = Trivia.findById(contestant.triviaId);
  //     // console.log(user);
  //     leaderboard.push({
  //       user: user.name,
  //       points: contestant.points,
  //       timeTaken: contestant.timeTaken,

  //     });
  //   })
  // );
  // console.log(leaderboard);
  console.log("sending leaderboard");
  res.status(200).json(leaderboard);
});
router.get("/:id", withAuth, async (req, res) => {
  //   console.log(req.query);
  const id = req.params.id;
  //   const id =  req.uid;

  console.log("id: ", id);
  try {
    const trivia = await Trivia.findById(id, null, {
      sort: {
        _createdAt: 1,
      },
    });
    const user = await User.findOne({ firebaseID: req.uid });
    console.log("user: ", user);
    const hasAttempted = user.containsTrivia(id);
    trivia.hasAttempted = hasAttempted;
    let userTrivia;
    if (hasAttempted) {
      userTrivia = user.trivias.find(
        (trivia) => trivia.triviaId.toString() === id
      );
    }
    if (userTrivia) {
      trivia.userTrivia = userTrivia;
    }
    console.log(hasAttempted);
    console.log(userTrivia);
    console.log(trivia);
    return res.status(200).json({
      ...trivia.toJSON(),
      hasAttempted,
      userTrivia,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err.toString() });
  }
});

/**
 * A post request to set the user's points for a trivia
 * @param {string} id - the id of the trivia to set the user's points for
 * @param {number} points - the points to set the user's points to
 * id must be passed as a request parameter
 * points must be passed in the body of the request
 * This is an authenticated request, the user must be logged in to make it
 * If points for this user and this trivia already exist, they are updated.
 * If points for this user and this trivia do not exist, they are created.
 * Accordingly a "Points added" or "Points updated" message is relayed from
 * the server.
 */
router.post("/:id/points", withAuth, async (req, res) => {
  const firebaseID = req.uid;
  const id = req.params.id;
  const { points, timeTaken } = req.body;
  try {
    const user = await User.findOne({ firebaseID });
    const currTrivia = await Trivia.findOne({}, ["_id"], {
      sort: {
        _createdAt: -1,
      },
    });
    if (currTrivia._id.equals(mongoose.Types.ObjectId(id))) {
      // ADD Score to leaderboard
      const contestantData = TriviaContestant({
        userId: firebaseID,
        triviaId: id,
        points,
        timeTaken,
      });
      const contestant = await contestantData.save();
      console.log("current trivia");
    } else {
      console.log("Older trivia");
    }
    console.log(user);
    if (!user.trivias) {
      user.trivias = [];
    }
    //if user.trivias contains document with triviaId as id, update points
    //else create new document

    const trivia = user.trivias.find((trivia) => {
      return trivia.triviaId.equals(mongoose.Types.ObjectId(id));
    });
    let msg = "";
    console.log(trivia);
    if (trivia) {
      trivia.points = points;
      trivia.timeTaken = timeTaken;
      msg = "Points updated!";
    } else {
      user.trivias.push({
        triviaId: id,
        points,
        timeTaken,
      });
      msg = "Points added!";
    }
    // user.trivias.push({
    //   triviaId: id,
    //   points,
    // });
    await user.save();
    return res.status(200).json("Success, " + msg);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.toString() });
  }
});

module.exports = router;
