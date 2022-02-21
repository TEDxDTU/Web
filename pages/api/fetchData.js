export default async function handler(req, res) {
  const DBURL = process.env.DB_URL;
  console.log(DBURL);
  res.status(200).send(DBURL.toString());
}