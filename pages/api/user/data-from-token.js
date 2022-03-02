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
      // console.log(admin.auth);
      const auth = admin.auth();

      auth
        .verifyIdToken(authToken)
        .then(async (decodedToken) => {
          const firebaseID = decodedToken.uid;
          const user = await User.findOne({ firebaseID });
          console.log(user.toString());
          return res.send(user);
        })
        .catch((error) => {
          console.log(error.toString());
          return res.status(500).json({
            msg: error.toString(),
          });
        });
    }
  } catch (err) {
    console.log(err.toString());
  }
}
