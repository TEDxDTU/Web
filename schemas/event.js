const mongoose = require("mongoose");
const validator = require("validator");
const speakerSchema = require("./speaker");

const eventSchema = mongoose.Schema({
  /**The date and time the event occurs, in ISO8601 format */
  dateTime: {
    // ISO8601 encoded date
    type: String,
    validate(value) {
      if (!value) return;
      if (!validator.isISO8601(value)) {
        throw new Error("Invalid dateTime format");
      }
    },
  },
  /**The type of the event, either past,upcoming,live or story.
   * With current architecture, live events have been moved to Firebase
   **/
  eventType: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error("Missing eventType");
      }
      const allowedValues = ["past", "upcoming", "live", "story"];
      if (!allowedValues.includes(value)) {
        throw new Error(
          "Event type must be one of: " + allowedValues.join(", ")
        );
      }
    },
  },
  /**The list of images taken during the event */
  galleryImageUrls: [
    {
      type: String,
      validate(value) {
        if (!value) return;
        if (!validator.isURL(value)) {
          throw new Error(`${value} in galleryImageUrls is not a valid URL`);
        }
      },
    },
  ],
  requiresTicket: {
    type: Boolean,
    default: false,
  },
  details: {
    type: String,
    required: true,
  },
  /** The cover image URL of the event, can be used as thumbnail */
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
  /** The list of speakers for the event */
  speakersList: [
    {
      type: speakerSchema,
      required: true,
    },
  ],
  venue: {
    type: String,
    required: true,
  },
  /** The YT stream URL for the event */
  streamingUrl: {
    type: String,
    validate(value) {
      if (!value) return;
      if (!validator.isURL(value)) {
        throw new Error(`${value} in streamingUrl is not a valid URL`);
      }
    },
  },
  price: {
    type: Number,
  },
  /**@deprecated ,this was only for LIVE EVENT, which is now on Firebase*/
  currentSpeakerIndex: Number,
});

/**
 * This function runs before an event is saved to the database.
 * It verifies that past event has gallery images, and that its date
 * actually is in the past.
 * For upcoming event it verifies date, and that an upcoming event
 * that needs ticket has a price.
 *
 */
eventSchema.pre("save", async function (next) {
  const event = this;
  if (event.eventType == "past") {
    if (!event.galleryImageUrls) {
      throw new Error("galleryImageUrls is required for past events");
    }

    if (validator.isAfter(event.dateTime, new Date().toISOString())) {
      throw new Error("dateTime for past event must be in the past");
    }
  } else if (event.eventType == "upcoming") {
    if (validator.isBefore(event.dateTime, new Date().toISOString())) {
      throw new Error("dateTime for upcoming event must be in the future");
    }
    if (
      event.requiresTicket &&
      (event.price == null || event.price == undefined)
    ) {
      throw new Error("price is required for upcoming events with ticket");
    }
  } else {
    //TODO: Add validation for live and story events
  }
  next();
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
module.exports = Event;
