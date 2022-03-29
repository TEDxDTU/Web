export default async function getLiveEvent() {

  const { getFirestore } = require("firebase-admin/firestore");
  const getAdmin = require("./getAdmin").default;
  const admin = getAdmin();
  const db = getFirestore(admin);
  const liveEvent = (await db.collection("liveEvent").doc("currentEvent").get()).data();
  return liveEvent;
};
