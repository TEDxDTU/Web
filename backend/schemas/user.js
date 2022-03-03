const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value))
        throw new Error(`${value} is not a valid E-mail`);
    },
  },

  university: {
    type: String,
    required: true,
  },

  imageURL: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isURL(value))
        throw new Error(`${value} is not a valid URL`);
    },
  },

  // _id: {
  //   type: mongoose.Types.ObjectId,

  // }
  firebaseID: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
