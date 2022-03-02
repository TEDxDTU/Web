const admin = require("firebase-admin");
const creds = require("../../../tedx-dtu-firebase-adminsdk-creds.json");
const User = require("../../../backend/schemas/user");
const mongooseConnect = require("../../../backend/mongooseConnect");

export default async function handler(req, res) {
  if (admin.apps.length === 0)
    admin.initializeApp({
      credential: admin.credential.cert(creds),
    });

  try {
    if (req.method === "POST") {
      const { name, email, password, university, imageURL } = req.body;
      console.log(name, email, password, university, imageURL);
      const auth = admin.auth();
      let existingUser;

      try {
        existingUser = await auth.getUserByEmail(email);
      } catch (err) {}

      if (existingUser) {
        console.log("User exists");
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
    }
  } catch (err) {
    console.log(err);
  }
}
