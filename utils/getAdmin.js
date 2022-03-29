export default function getAdmin() {
  const admin = require("firebase-admin/app");
  const creds = require("../tedx-dtu-firebase-adminsdk-creds.json");
  if (admin.getApps().length === 0) return admin.initializeApp({ credential: admin.cert(creds) });
  return admin.getApp();
};