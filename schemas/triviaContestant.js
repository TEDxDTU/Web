const mongoose = require("mongoose");
// const validator = require("validator");
const User = require("../schemas/user");

const triviaContestantSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
      unique: true,
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
triviaContestantSchema.pre("save", async function (next) {
  const triviaContestant = this;
  try {
    const user = await User.findOne({ firebaseID: triviaContestant.userId });
    if (!user) {
      throw Exception(
        `trivia contestant ID ${triviaContestant.userId} must be a valid firebase ID`
      );
    }
    return next();
  } catch (error) {
    throw Exception(error.toString());
  }
});
const TriviaContestant = mongoose.model(
  "TriviaContestant",
  triviaContestantSchema,
  "leaderboard"
);

module.exports = TriviaContestant;
