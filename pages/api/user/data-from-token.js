// import firebase from "firebase";
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
      const { authToken } = req.body;
      const auth = admin.auth();

      auth
        .verifyIdToken(authToken)
        .then(async (decodedToken) => {
          const firebaseID = decodedToken.uid;
          const user = await User.findOne({ firebaseID });
          return res.send(user);
        })
        .catch((error) => {
          return res.status(500).json({
            msg: error.toString(),
          });
        });
    } else {
      res.status(401).json("Method not allowed");
    }
  } catch (err) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
}
