const mongoose = require("mongoose");
const validator = require("validator");
const speakerSchema = require("./speaker");

const eventSchema = mongoose.Schema({
    dateTime: {
        // ISO8601 encoded date
        type: String,
        validate(value) {
            if (!value) return;
            if (!validator.isISO8601(value)) {
                throw new Error("Invalid dateTime format");
            };
        },
    },
    eventType: {
        type: String,
        required: true,
        validate(value) {
            if (!value) {
                throw new Error("Missing eventType");
            };
            const allowedValues = [ "past", "upcoming", "live", "story" ];
            if (!allowedValues.includes(value)) {
                throw new Error(
                    "Event type must be one of: " + allowedValues.join(", ")
                );
            }
        },
    },
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
    currentSpeakerIndex: Number,
});

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
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
module.exports = Event;
