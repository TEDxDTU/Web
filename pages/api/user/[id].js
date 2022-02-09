export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.params;
  }

  if (req.method === "GET")

    const DBURL = process.env.DB_URL;
  console.log(DBURL);
  res.sendStatus(200);
}