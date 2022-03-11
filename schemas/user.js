const mongoose = require("mongoose");
const validator = require("validator");

const userTriviaSchema = mongoose.Schema(
  {
    triviaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trivia",
      required: true,
    },
    points: {
      type: Number,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);
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
  trivias: [userTriviaSchema],
  triviasAttempted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trivia",
    },
  ],
  firebaseID: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
