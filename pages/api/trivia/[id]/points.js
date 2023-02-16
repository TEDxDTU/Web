const init = require('../../../../backend/init.js');
const User = require('../../../../schemas/user.js');
const Trivia = require('../../../../schemas/trivia.js');
const TriviaContestant = require('../../../../schemas/triviaContestant.js');
// const admin = require("firebase-admin");
const mongoose = require("mongoose");
const withAuth = require('../../../../middleware/auth').withAuth;

async function handler(req, res) {
    if (req.method === "POST") {
        const firebaseID = req.uid;
        const id = req.query.id
        const { points, timeTaken } = req.body;
        try {
            const user = await User.findOne({ firebaseID });
            const currTrivia = await Trivia.findOne({}, ["_id"], {
                sort: {
                    _createdAt: -1,
                },
            });
            if (currTrivia._id.equals(mongoose.Types.ObjectId(id))) {
                // ADD Score to leaderboard
                const contestantData = TriviaContestant({
                    userId: firebaseID,
                    triviaId: id,
                    points,
                    timeTaken,
                });
                const contestant = await contestantData.save();
                console.log("current trivia");
            } else {
                console.log("Older trivia");
            }
            console.log(user);
            if (!user.trivias) {
                user.trivias = [];
            }
            //if user.trivias contains document with triviaId as id, update points
            //else create new document

            const trivia = user.trivias.find((trivia) => {
                return trivia.triviaId.equals(mongoose.Types.ObjectId(id));
            });
            let msg = "";
            console.log(trivia);
            if (trivia) {
                trivia.points = points;
                trivia.timeTaken = timeTaken;
                msg = "Points updated!";
            } else {
                user.trivias.push({
                    triviaId: id,
                    points,
                    timeTaken,
                });
                msg = "Points added!";
            }
            // user.trivias.push({
            //   triviaId: id,
            //   points,
            // });
            await user.save();
            return res.status(200).json("Success, " + msg);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: error.toString() });
        }
    } else {
        return res.status(405).json({ msg: "Method not allowed" });
    }
}

export default withAuth(handler);