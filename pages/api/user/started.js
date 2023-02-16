const dbConnect = require("../../../backend/dbConnect");
const User = require("../../../schemas/user");
const withAuth = require("../../../middleware/auth").withAuth;

async function handler(req, res) {
    if (req.method === "POST") {
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
    } else {
        return res.status(405).json({ msg: "Method not allowed" });

    }
}

export default withAuth(handler);