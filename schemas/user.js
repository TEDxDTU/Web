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
userTriviaSchema.methods.toJSON = function () {
  const userTrivia = this;
  userTriviaObj = userTrivia.toObject();
  delete userTriviaObj.triviaId;
  delete userTriviaObj.createdAt;
  delete userTriviaObj.updatedAt;
  return userTriviaObj;
};
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

userSchema.methods.containsTrivia = function (id) {
  const user = this;
  return user.triviasAttempted.some((triviaId) => triviaId.toString() === id);
};
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.trivias;
  delete userObject.triviasAttempted;
  return userObject;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
