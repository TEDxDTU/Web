const mongoose = require("mongoose");

if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.DB_URL);
};
