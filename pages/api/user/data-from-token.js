const init = require("../../../backend/init");
const admin = require("firebase-admin");
const User = require("../../../schemas/user");
const Ticket = require("../../../schemas/ticket");
const { withAuth } = require("../../../middleware/auth");

export default async function handler(req, res) {
    console.log("Data from token running");
    if (req.method === "POST") {
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
    } else {
        res.status(405).json({
            msg: "Method not allowed",
        });
    }
}

