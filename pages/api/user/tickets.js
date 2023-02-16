const init = require('../../../backend/dbConnect.js');
const User = require('../../../schemas/user.js');
const Ticket = require('../../../schemas/ticket.js');
const { withAuth } = require('../../../middleware/auth');


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            // const { triviaId } = req.body;
            const firebaseID = req.uid;
            const user = await User.findOne({ firebaseID });
            if (!user.tickets) {
                user.tickets = [];
            }
            // user.triviasAttempted.push(triviaId);
            // await user.save();
            // return res.json("Marked trivia started");
            const result = await user.getTicketDetails();
            console.log(result);
            return res.status(200).json(result);
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