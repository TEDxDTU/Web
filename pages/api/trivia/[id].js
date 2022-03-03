const mongooseConnect = require("../../../backend/mongooseConnect");
const Trivia = require("../../../backend/schemas/trivia");

export default async function getSingleTrivia(req, res) {
  console.log("getSingleTrivia");
  console.log(req.query);
  console.log(req.params);
  const { id } = req.query;
  console.log(id);
  try {
    const trivias = await Trivia.findById(id, null, {
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
