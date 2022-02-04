const mongoose = require("mongoose");
const validator = require("validator");

const speakerSchema = mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  achievements: [
    {
      type: String,
      required: true,
    },
  ],
  bio: {
    type: String,
    required: true,
  },
  resources: [
    {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error(`${value} in galleryImageUrls is not a valid URL`);
        }
      },
    },
  ],
  imageUrl: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error(`${value} in galleryImageUrls is not a valid URL`);
      }
    },
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = speakerSchema;
