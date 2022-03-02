// import firebase from "firebase";
const admin = require("firebase-admin");
const creds = require("../../../tedx-dtu-firebase-adminsdk-creds.json");
const User = require("../../../backend/schemas/user");
const mongooseConnect = require("../../../backend/mongooseConnect");

export default async function handler(req, res) {
  if (admin.apps.length === 0)
    await admin.initializeApp({
      credential: admin.credential.cert(creds),
    });

  try {
    if (req.method === "POST") {
      const { authToken, email, password, name, imageURL, university } =
        req.body;
      // console.log(admin.auth);
      console.log(university);
      const auth = admin.auth();
      console.log("here1");
      const decodedToken = await auth.verifyIdToken(authToken);

      const firebaseID = decodedToken.uid;
      const updatedFBUser = await auth.updateUser(firebaseID, {
        email,
        password,
        displayName: name,
      });
      // console.log(JSON.stringify(updatedFBUser));
      console.log("here2");

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
      console.log(newUser);

      return res.json(newUser);
    } else {
      return res.status(405).json({
        msg: "Method not allowed",
      });
    }
  } catch (err) {
    console.log(err.toString());
    return res.status(500).json({
      msg: err.toString(),
    });
  }
  //method not allowed
}
