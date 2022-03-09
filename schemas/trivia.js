const mongoose = require("mongoose");
const validator = require("validator");

const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: [
      {
        type: String,
        required: true,
      },
    ],
    correctAnswerIndex: {
      type: Number,
      required: true,
    },
    seconds: {
      type: Number,
      default: 10,
    },
  },
  {
    _id: false,
  }
);

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
    title: {
      type: String,
      required: true,
    },
    questions: [
      {
        type: questionSchema,
        required: true,
      },
    ],
    questionCount: {
      type: Number,
      // required: true,
    },
    totalTime: {
      type: Number,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

triviaSchema.pre("save", async function (next) {
  this.questionCount = this.questions.length;
  this.totalTime = this.questions.reduce((acc, cur) => acc + cur.seconds, 0);
  next();
});

const Trivia = mongoose.models.Trivia || mongoose.model("Trivia", triviaSchema);
module.exports = Trivia;
