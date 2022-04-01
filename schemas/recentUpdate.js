const mongoose = require("mongoose");
const validator = require("validator");
// const User = require("../schemas/user");

const recentUpdateSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    validate(value) {
      if (!value) {
        throw new Error("imageURL is required");
      }
      if (!validator.isURL(value)) {
        throw new Error(`${value} in imageURL is not a valid URL`);
      }
    },
  },
  description: String,
  URL: {
    type: String,
    required: true,
    validate(value) {
      if (!value) return;
      if (!validator.isURL(value)) {
        throw new Error(`${value} in URL is not a valid URL`);
      }
    },
  },
  likes: {
    type: Number,
    default: 0,
  },
  inBanner: {
    type: Boolean,
    default: false,
  },
  dateTime: {
    type: String,
    required: true,
    validate(value) {
      if (!value) return;
      if (!validator.isISO8601(value)) {
        throw new Error(
          `${value} in dateTime is not a valid ISO8601 date time.`
        );
      }
    },
  },
});

const RecentUpdate =
  mongoose.models.RecentUpdate ||
  mongoose.model("RecentUpdate", recentUpdateSchema);
module.exports = RecentUpdate;
