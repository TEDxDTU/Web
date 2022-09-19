const mongoose = require("mongoose");
const validator = require("validator");
/**
 * Schema for speakers in an event
 */
const speakerSchema = mongoose.Schema({
  /** The topic the speaker will speak on */
  topic: {
    type: String,
    required: true,
  },
  /** The list of achievements of the speaker, such as
   * "CEO of ....", "Awardee of ....", etc.
   */
  achievements: [
    {
      type: String,
      // required: true,
    },
  ],
  /** Short info about the speaker */
  bio: {
    type: String,
    required: true,
  },
  /** List of URL resources for the speaker, such as Wikipedia or LinkedIn or YouTube */
  resources: [
    {
      type: String,
      trim: true,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error(`${value} in resources is not a valid URL`);
        }
      },
    },
  ],
  /** Link to the speaker's image */
  imageUrl: {
    type: String,
    required: true,
    trim: true,

    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error(`${value} in imageUrl is not a valid URL`);
      }
    },
  },
  /** Name of the speaker */
  name: {
    type: String,
    required: true,
  },
});

module.exports = speakerSchema;
