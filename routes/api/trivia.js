"use strict";

const express = require("express");
const router = express.Router();
const Trivia = require("../../schemas/trivia");
const withAuth = require("../../middleware/auth");
const User = require("../../schemas/user");
const mongoose = require("mongoose");

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
    return res.status(500).json({ error: err.toString() });
  }
});

router.get("/:id", withAuth, async (req, res) => {
  //   console.log(req.query);
  const id = req.params.id;
  //   const id =  req.uid;

  console.log("id: ", id);
  try {
    const trivias = await Trivia.findById(id, null, {
      sort: {
        _createdAt: 1,
      },
    });
    console.log(trivias);
    return res.status(200).json(trivias);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.toString() });
  }
});

router.post("/:id/points", withAuth, async (req, res) => {
  const firebaseID = req.uid;
  const id = req.params.id;
  const { points } = req.body;
  try {
    const user = await User.findOne({ firebaseID });
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
      msg = "Points updated!";
    } else {
      user.trivias.push({
        triviaId: id,
        points: points,
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
