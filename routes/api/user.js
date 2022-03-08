"use strict";

const User = require("../../schemas/user");
const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("sign-up", async (req, res) => {
  try {
    const { name, email, password, university, imageURL } = req.body;
    const auth = admin.auth();

    let existingUser;

    try {
      existingUser = await auth.getUserByEmail(email);
    } catch (err) {}

    if (existingUser) {
      res.status(400).json({
        msg: "User with given email already exists",
        code: "user_exists",
      });
      return;
    }

    const newDBUser = User({
      name,
      email,
      university,
      imageURL,
    });

    try {
      await newDBUser.save();

      const newFirebaseUser = await auth.createUser({
        email: email,
        // emailVerified: false,
        password: password,
        displayName: name,
        disabled: false,
        // photoURL: imageURL
      });

      newDBUser.firebaseID = newFirebaseUser.uid;

      await newDBUser.save();

      return res.json(newDBUser);
    } catch (err) {
      res.status(500).json({
        msg: err.toString(),
      });
    }
  } catch (err) {
    res.sendStatus(500).json({
      msg: err.toString(),
    });
  }
});

router.post("/update", async (req, res) => {
  try {
    const { authToken, email, password, name, imageURL, university } = req.body;
    const auth = admin.auth();
    const decodedToken = await auth.verifyIdToken(authToken);

    const firebaseID = decodedToken.uid;
    const updatedFBUser = await auth.updateUser(firebaseID, {
      email,
      password,
      displayName: name,
    });

    const newUser = await User.findOneAndUpdate(
      { firebaseID },
      {
        email,
        name,
        imageURL,
        university,
      },
      {
        new: true,
      }
    );

    return res.json(newUser);
  } catch (err) {
    return res.status(500).json({
      msg: err.toString(),
    });
  }
});

router.post("/data-from-token", async (req, res) => {
  try {
    console.log(req.query);
    console.log(req.params);
    const { authToken } = req.body;
    const auth = admin.auth();
    const decodedToken = await auth.verifyIdToken(authToken);
    const firebaseID = decodedToken.uid;
    const user = await User.findOne({ firebaseID });
    return res.json(user);
  } catch (err) {
    console.log(err.toString());
    return res.status(500).json({
      msg: err.toString(),
    });
  }
});

module.exports = router;
