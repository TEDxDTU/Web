const mongooseConnect = require("../../backend/mongooseConnect");
const Event = require("../../backend/schemas/event");

export default async function eventHandler(req, res) {
  var {
    query: { eventType, sortBy, sortOrder, page, limit },
  } = req;
  sortOrder = sortOrder || "asc";
  page = page || 1;
  limit = limit || null;
  sortBy = sortBy || "dateTime";
  try {
    const events = await Event.find({ eventType }, null, {
      sort: { [sortBy]: sortOrder === "asc" ? 1 : -1 },
      skip: (page - 1) * limit,
      limit,
    });
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
