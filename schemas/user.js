const mongoose = require("mongoose");
const validator = require("validator");
/**
 * Schema to hold the details of a user's trivias
 * For now it mainly holds the points a user has scored
 * Later we might add more stuff.
 */
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
    timeTaken: {
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

/**
 * Schema for users
 */
const userSchema = mongoose.Schema({
  /** Name of the user */
  name: {
    type: String,
    required: true,
  },
  /** Email of the user, must be unique. */
  email: {
    type: String,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value))
        throw new Error(`${value} is not a valid E-mail`);
    },
  },
  /** The university the user studies in */
  university: {
    type: String,
    required: true,
  },
  /**
   * URL to the profile image of the user. With current architecture, should be
   * stored in Cloud Storage in Firebase.
   */
  imageURL: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isURL(value))
        throw new Error(`${value} is not a valid URL`);
    },
  },
  /**
   * The list of trivias that the user has given and scored points in.
   * All trivias here will also be in [triviasAttempted]
   */
  trivias: [userTriviaSchema],
  /**
   * The list of trivias that the user has *STARTED*
   * The trivias that got interrupted due to Internet issues or other reasons,
   * will be in this list but not in [trivias].
   * These are stored because once a Trivia is started we do not allow it to be
   * attempted again (to prevent people from Googling answers and restarting the
   * trivia over and over again)
   * It is the front end's responsibility to populate this field before a Trivia
   * is started and to check it before starting a Trivia.
   */
  triviasAttempted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trivia",
    },
  ],
  /** The user's UID in firebase. This is used to identify a user in Mongo as well*/
  firebaseID: {
    type: String
  },
});

/**
 * @param {string} id
 * @returns {boolean}
 *
 * Checks if the user has started a trivia with the given id
 */
userSchema.methods.containsTrivia = function (id) {
  const user = this;
  return user.triviasAttempted.some((triviaId) => triviaId.toString() === id);
};

/**
 * Deletes the user's trivias from the JSON response that is sent to the front end
 * If the front end needs it, it can be requested explicitly. Otherwise it is not
 * sent because it might not be needed at all.
 */
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.trivias;
  delete userObject.triviasAttempted;
  return userObject;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
