const dbconnect = require('../../../backend/dbConnect.js');
const User = require('../../../schemas/user.js');
const Trivia = require('../../../schemas/trivia.js');
const admin = require("firebase-admin");
export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const trivias = await Trivia.find(
                {},
                ["imageUrl", "title", "questionCount", "totalTime", "_id"],
                {
                    sort: {
                        _createdAt: 1,
                    },
                }
            );
            const authorization = req.headers.authorization;
            if (!authorization) {
                return res.status(200).json({ trivias });
            }
            const token = authorization;
            let decodedIdToken;
            try {
                decodedIdToken = await admin.auth().verifyIdToken(token);
                if (!decodedIdToken || !decodedIdToken.uid) {
                    return res.status(200).json({ trivias, error: "Not authenticated." });
                }

                req.uid = decodedIdToken.uid;
                const user = await User.findOne({ firebaseID: req.uid }, [
                    "triviasAttempted",
                ]);
                return res.status(200).json({
                    trivias,
                    userData: {
                        triviasAttempted: user.triviasAttempted,
                    },
                });
            } catch (error) {
                console.log(`verifyIdToken error: ${error}`);
                return res.status(200).json(trivias);
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ "msg": err.toString() });
        }

    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}