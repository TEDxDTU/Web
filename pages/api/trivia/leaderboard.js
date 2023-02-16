const dbConnect = require("../../../backend/dbConnect");

const User = require("../../../schemas/user");
const TriviaContestant = require("../../../schemas/triviaContestant");

export default async function (req, res) {
    if (req.method === "GET") {
        const contestants = await TriviaContestant.find({}, null, {
            // Don't use object notation for sort as we need to first
            // sort by points, then by time taken, then by date
            // JavaScript objects are not ORDEREd, so object notation will not work.
            sort: "-points timeTaken createdAt",
            limit: 10,
        });
        console.log(contestants);
        let leaderboard = [];

        for (let i = 0; i < contestants.length; i++) {
            const user = await User.findOne({ firebaseID: contestants[i].userId });
            if (user == null) {
                console.log(contestants[i].userId);
                continue;
            }
            leaderboard.push({
                name: user.name,
                points: contestants[i].points,
                timeTaken: contestants[i].timeTaken,
                imageURL: user.imageURL,
                university: user.university,
                firebaseID: user.firebaseID,
            });
        }
        console.log("sending leaderboard");
        res.status(200).json(leaderboard);
    } else {
        res.status(405).json({ msg: "Invalid request method" });
    }
}