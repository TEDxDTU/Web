"use strict";

const express = require("express");
const router = express.Router();
const Trivia = require("../../schemas/trivia");
const withAuth = require("../../middleware/auth");
const User = require("../../schemas/user");
const mongoose = require("mongoose");
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
    return res.status(200).json(trivias);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err.toString() });
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
      //   console.log(
      //     trivia.triviaId,
      //     "==",
      //     mongoose.Types.ObjectId(id),
      //     trivia.triviaId.equals(mongoose.Types.ObjectId(id))
      //   );
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
