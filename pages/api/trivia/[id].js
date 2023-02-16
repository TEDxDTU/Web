const init = require('../../../backend/init.js');
const User = require('../../../schemas/user.js');
const Trivia = require('../../../schemas/trivia.js');
const admin = require("firebase-admin");
const withAuth = require('../../../middleware/auth').withAuth;

async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        //   const id =  req.uid;

        console.log("id: ", id);
        try {
            const trivia = await Trivia.findById(id, null, {
                sort: {
                    _createdAt: 1,
                },
            });
            const user = await User.findOne({ firebaseID: req.uid });
            console.log("user: ", user);
            const hasAttempted = user.containsTrivia(id);
            trivia.hasAttempted = hasAttempted;
            let userTrivia;
            if (hasAttempted) {
                userTrivia = user.trivias.find(
                    (trivia) => trivia.triviaId.toString() === id
                );
            }
            if (userTrivia) {
                trivia.userTrivia = userTrivia;
            }
            console.log(hasAttempted);
            console.log(userTrivia);
            console.log(trivia);
            return res.status(200).json({
                ...trivia.toJSON(),
                hasAttempted,
                userTrivia,
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: err.toString() });
        }
    }
}

export default withAuth(handler);