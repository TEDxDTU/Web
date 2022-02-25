const mongooseConnect = require("../../../backend/mongooseConnect");
const Trivia = require("../../../backend/schemas/trivia");

export default async function triviaFetchHandler(req, res) {
  console.log(req.query);
  try {
    const trivias = await Trivia.find({}, null, {
      sort: {
        _createdAt: 1,
      },
    });
    return res.status(200).json(trivias);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.toString() });
  }
}
