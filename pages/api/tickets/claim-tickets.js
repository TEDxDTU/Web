const User = require("../../../schemas/user");
const Ticket = require("../../../schemas/ticket");
const { withAuth } = require("../../../middleware/auth");

async function handler(req, res) {
    if (req.method === "POST") {
        const init = require("../../../backend/init");
        console.log("GET request received");

        // const user = User.find({ firebaseID: req.uid });
        // if (
        //   user.userType == null ||
        //   user.userType == undefined ||
        //   (user.userType != "admin" && user.userType != "superadmin")
        // ) {
        //   return res.status(401).json({ msg: "Unauthorized" + user.userType });
        // }
        const user = await User.findOne({ firebaseID: req.uid });
        // console.log(user);
        if (
            user.userType == null ||
            user.userType == undefined ||
            (user.userType != "admin" && user.userType != "superadmin")
        ) {
            return res.status(401).json({ msg: "Unauthorized" + user.userType });
        }
        var { ticketID, toClaim } = req.body;
        toClaim = parseInt(toClaim);
        try {
            const ticket = await Ticket.findById(ticketID);
            if (!ticket) return res.status(404).json({ msg: "No Ticket Found" });
            ticket.claimedTickets = ticket.claimedTickets + toClaim;
            await ticket.save();
            return res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json({ msg: "Unknown Server Error" });
        }
    }
};

export default withAuth(handler)