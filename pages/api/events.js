const dbConnect = require("../../backend/dbConnect");
const Event = require("../../schemas/event");

export default async function handler(req, res) {
    let { eventType, sortBy, sortOrder, page, limit } = req.query;
    sortOrder = sortOrder || "asc";
    page = page || 1;
    limit = limit || null;
    sortBy = sortBy || "dateTime";
    try {
        const options = {
            sort: { [sortBy]: sortOrder === "asc" ? 1 : -1 },
            skip: (page - 1) * limit,
            limit,
        };
        let events = [];

        if (eventType == "past") eventType = "past_new_format";
        if (eventType == "storyEvent") {
            events = await Event.find(
                { eventType: "storyEvent" },
                ["_id", "title", "details", "stories", "venue"],
                options
            ).populate({
                path: "stories",
                select: [
                    "_id",
                    "title",
                    "details",
                    "venue",
                    "imageUrl",
                    "dateTime",
                    "speakersList",
                    "streamingUrl",
                ],
            });
        } else if (eventType) {
            events = await Event.find({ eventType }, null, options);
        } else {
            events = await Event.find({}, null, options);
        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}