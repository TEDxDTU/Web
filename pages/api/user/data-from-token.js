// import firebase from "firebase";
const admin = require("firebase-admin");
const creds = require("../../../tedx-dtu-firebase-adminsdk-creds.json");
const User = require("../../../backend/schemas/user");
const mongooseConnect = require("../../../backend/mongooseConnect");

export default async function handler(req, res) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(creds),
    });
  }

  try {
    if (req.method === "POST") {
      const { authToken } = req.body;
      const auth = admin.auth();
      const decodedToken = await auth.verifyIdToken(authToken);
      const firebaseID = decodedToken.uid;
      const user = await User.findOne({ firebaseID });
      return res.json(user);
    } else {
      res.status(405).json("Method not allowed");
    }
  } catch (err) {
    console.log(err.toString());
    return res.status(500).json({
      msg: err.toString(),
    });
  }
}
