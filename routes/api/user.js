"use strict";

const User = require("../../schemas/user");
const express = require("express");
const withAuth = require("../../middleware/auth").withAuth;

const router = express.Router();
const admin = require("firebase-admin");
/**
 * Sign up post request
 * @param {string} email - the email of the user
 * @param {string} password - the password of the user
 * @param {string} name - the name of the user
 * @param {string} university - the university of the user
 * @param {string} imageURL - the URL to the user's profile picture, with current architecture should be on Firebase Cloud Storage
 *
 * If user with same email already exists, returns 409 with error code user_exists
 * Otherwise, creates a new user in both MongoDB and FirebaseAuth and returns the details
 * TODO: ADD EMAIL VERIFICATION VIA OTP OR FIREBASE
 */
router.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password, university, imageURL } = req.body;
    const auth = admin.auth();
    let existingUser;

    try {
      existingUser = await auth.getUserByEmail(email);
    } catch (err) { }

    if (existingUser) {
      return res.status(409).json({
        msg: "User with given email already exists",
        code: "user_exists",
      });
    }

    const newDBUser = User({
      name,
      email,
      university,
      imageURL,
    });

    try {
      newDBUser.firebaseID = undefined;
      await newDBUser.save();
      // b;
      const newFirebaseUser = await auth.createUser({
        email: email,
        // emailVerified: false,
        password: password,
        displayName: name,
        disabled: false,
        // photoURL: imageURL
      });

      console.log(newFirebaseUser, auth);
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

/**
 * Sign up post request
 * @param {string} email - the email of the user
 * @param {string} password - the password of the user
 * @param {string} name - the name of the user
 * @param {string} university - the university of the user
 * @param {string} imageURL - the URL to the user's profile picture, with current architecture should be on Firebase Cloud Storage
 *
 * If firebase user is already made at frontend, here the display name is updated in firebase
 * and creates a new user in both MongoDB and returns the details
 * EMAIL VERIFICATION VIA FIREBASE
 */

router.post("/sign-up-web", withAuth, async (req, res) => {
  const { name, email, university, imageURL } = req.body;
  const auth = admin.auth();

  let existingUser = await auth.getUserByEmail(email);
  const firebaseID = existingUser.uid;

  const updatedFBUser = await auth.updateUser(firebaseID, {
    displayName: name,
  });

  const newDBUser = User({
    name,
    email,
    university,
    imageURL,
    firebaseID
  });

  try {
    await newDBUser.save();
    // console.log("hi");
    return res.json(newDBUser).status(200);
  } catch (err) {
    res.status(500).json({
      msg: err.toString(),
    });
  }
});

/**
 * Post request to update a given user data, should probably be a PATCH request
 * @param {string} name - the updated name
 * @param {string} university - the updated university
 * @param {string} imageURL - the updated URL to the user's profile picture, with current architecture should be on Firebase Cloud Storage
 * @param {string} password - the updated password
 * @param {string} email - the updated email
 *
 * All params should be passed in the request body. This is an authenticated request,
 * a valid authToken must be passed in headers.
 *
 * It is the responsibility of the frontend to verify the old password before sending
 * a password change request. Recommended to use a password change email from Firebase
 * instead. On email change a logout should be triggered from frontend because all
 * existing auth and refresh tokens will become invalid.
 *
 * Updates the user's data in both MongoDB and FirebaseAuth
 * Returns the updated user data.
 */

router.post("/update", withAuth, async (req, res) => {
  try {
    const { email, password, name, imageURL, university } = req.body;

    const auth = admin.auth();

    const firebaseID = req.uid;
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

/**
 * Post request to get the user's data if authToken exists (should be a get request?)
 * @param {string} authToken - the auth token of the user, should be passed in body.
 *
 * Does not really need to be an authenticated request, because if the authToken is
 * invalid we will throw and return an error.
 *
 * Get's the user's uid from the authToken and returns the user's data.
 */
router.post("/data-from-token", async (req, res) => {
  try {
    const { authToken } = req.body;

    const auth = admin.auth();
    const decodedToken = await auth.verifyIdToken(authToken);
    const firebaseID = decodedToken.uid;

    const user = await User.findOne({ firebaseID }).populate("tickets");
    return res.json(user);
  } catch (err) {
    return res.status(500).json({
      msg: err.toString(),
    });
  }
});
/**
 * Post request to mark a trivia as started for a particular user
 * @param {string} triviaId - the id of the trivia to be marked as started
 * Should be passed in requests body.
 *
 * This is an authenticated request,a valid authToken must be given in the header.
 *
 * Marks the trivia as started for the user. Returns a success response with a
 * simple success message if successful.
 */
router.post("/started", withAuth, async (req, res) => {
  try {
    const { triviaId } = req.body;
    const firebaseID = req.uid;
    const user = await User.findOne({ firebaseID });
    if (!user.triviasAttempted) {
      user.triviasAttempted = [];
    }
    user.triviasAttempted.push(triviaId);
    await user.save();
    return res.json("Marked trivia started");
  } catch (err) {
    return res.status(500).json({
      msg: err.toString(),
    });
  }
});

router.get("/tickets", withAuth, async (req, res) => {
  try {
    // const { triviaId } = req.body;
    const firebaseID = req.uid;
    const user = await User.findOne({ firebaseID });
    if (!user.tickets) {
      user.tickets = [];
    }
    // user.triviasAttempted.push(triviaId);
    // await user.save();
    // return res.json("Marked trivia started");
    const result = await user.getTicketDetails();
    console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({
      msg: err.toString(),
    });
  }
});
module.exports = router;
