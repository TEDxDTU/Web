const mongoose = require("mongoose");
const admin = require("firebase-admin");
const creds = require("../tedx-dtu-firebase-adminsdk-creds.json");

try {
    if (mongoose.connection.readyState === 0) {
        // console.log(process.env.DB_URL);
        mongoose.connect(process.env.DB_URL);
    }
    if (admin.apps.length == 0) {
        admin.initializeApp({
            credential: admin.credential.cert(creds),
        });
    }
} catch (error) {
    throw error;
}