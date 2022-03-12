export default async function getLiveEvent() {
  const admin = require("firebase-admin");
  const db = admin.firestore();
  const liveEvent = (await db.collection("liveEvent").doc("currentEvent").get()).data();
  return liveEvent;
}
