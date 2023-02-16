const Ticket = require("../../../schemas/ticket");

export default async function handler(req, res) {
    if (req.method === "GET") {
        const init = require("../../../backend/init");
        console.log("GET request received");
        const { razorpayOrderID } = req.query;
        try {
            const ticket = await Ticket.findOne({ razorpayOrderID });
            if (!ticket) return res.status(404).json({ msg: "No Ticket Found" });
            return res.status(200).json(ticket);
        } catch (error) {
            return res.status(500).json({ msg: "Unknown Server Error" });
        }
    }
    else {
        res.status(405).json({ msg: "Method not allowed" });
    }
};
