const init = require('../../../backend/init.js');
const User = require('../../../schemas/user.js');
const { withAuth } = require('../../../middleware/auth');
const admin = require("firebase-admin");


async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { email, password, name, imageURL, university } = req.body;
            console.log(imageURL);
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
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}

export default withAuth(handler);