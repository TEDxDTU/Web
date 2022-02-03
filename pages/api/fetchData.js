export default async function handler(req, res) {
  const DBURL = process.env.DB_URL;
  console.log(DBURL);
  res.sendStatus(200);
}