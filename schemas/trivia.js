const mongoose = require("mongoose");
const validator = require("validator");
/** Schema for the questions in a trivia */
const questionSchema = mongoose.Schema(
  {
    /** The question statement*/
    question: {
      type: String,
      required: true,
    },
    /** The MCQ options*/
    options: [
      {
        type: String,
        required: true,
      },
    ],
    /** The correct answer index among [options] */
    correctAnswerIndex: {
      type: Number,
      required: true,
    },
    /** The time allowed for the question */
    seconds: {
      type: Number,
      default: 10,
    },
  },
  {
    _id: false,
  }
);
/**
 * Function that runs before a question is saved to the database.
 * Verifies that the correctAnswerIndex is a value between 0 and options.length-1
 * Verifies that seconds are not 0
 * Verifies that there are at least 2 valid options
 */
questionSchema.pre("save", async function (next) {
  if (
    this.correctAnswerIndex < 0 ||
    this.correctAnswerIndex >= this.options.length
  ) {
    throw new Error(
      "Correct answer index must be between 0 and options.length-1"
    );
  }
  if (this.seconds < 0) {
    throw new Error("Seconds must be greater than 0");
  }
  if (this.options.length <= 2) {
    throw new Error("Options must have more than 2 options");
  }
  next();
});

const triviaSchema = mongoose.Schema(
  {
    /** URL for the trivia thumbnail*/
    imageUrl: {
      type: String,
      required: true,
      validate(value) {
        if (!value) {
          throw new Error("imageUrl is required");
        }
        if (!validator.isURL(value)) {
          throw new Error(`${value} in imageUrl is not a valid URL`);
        }
      },
    },
    /** Title of the trivia */
    title: {
      type: String,
      required: true,
    },
    /** List of trivia questions */
    questions: [
      {
        type: questionSchema,
        required: true,
      },
    ],
    /**
     * The number of questions in the trivia
     * Could be gotten by questions.length as well. This is stored because we do not
     * send the list of questions to the front-end unless requested by an authenticated
     * request.
     */
    questionCount: {
      type: Number,
      // required: true,
    },
    /**
     * The total number of seconds allowed for the trivia
     * Is equal to sum of times allowed for the individual questions.
     *
     */
    totalTime: {
      type: Number,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Runs before saving
 * Populates the questionCount and totalTime fields.
 */
triviaSchema.pre("save", async function (next) {
  this.questionCount = this.questions.length;
  this.totalTime = this.questions.reduce((acc, cur) => acc + cur.seconds, 0);
  next();
});

const Trivia = mongoose.models.Trivia || mongoose.model("Trivia", triviaSchema);
module.exports = Trivia;
