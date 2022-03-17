const mongoose = require("mongoose");
const validator = require("validator");

const triviaContestantSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    triviaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trivia",
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    timeTaken: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const triviaContestant = mongoose.model(
  "TriviaContestant",
  triviaContestantSchema,
  "leaderboard"
);
module.exports = triviaContestant;
