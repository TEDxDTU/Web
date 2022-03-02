const mongoose = require("mongoose");

if (mongoose.connection.readyState === 0) {
  console.log(process.env.DB_URL);
  mongoose.connect(process.env.DB_URL);
};
