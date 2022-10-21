"use strict";

const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const Event = require("../../schemas/event");
// const withAuth = require("../../middleware/auth");
/**
 * Get request that returns a list of all events with the specified query
 * Query parameters:
 *  - eventType : string, must be either "past","upcoming",or "story"
 *  - page : number, the page number of the list of events
 * - limit : number, the number of events to return
 * - sortBy : string, the field to sort the events by, can be any of the following:
 *  ["dateTime","requiresTicket","details","imageUrl","title","venue","streamingUrl","price"]
 * - sortOrder : string, the order to sort the events by, can be either "asc" or "desc"
 */
router.get("/", async (req, res) => {
  let { eventType, sortBy, sortOrder, page, limit } = req.query;
  sortOrder = sortOrder || "asc";
  page = page || 1;
  limit = limit || null;
  sortBy = sortBy || "dateTime";
  try {
    const options = {
      sort: { [sortBy]: sortOrder === "asc" ? 1 : -1 },
      skip: (page - 1) * limit,
      limit,
    };
    let events = [];

    if (eventType == "past") eventType = "past_new_format";
    if (eventType == "storyEvent") {
      events = await Event.find(
        { eventType: "storyEvent" },
        ["_id", "title", "details", "stories", "venue"],
        options
      ).populate({
        path: "stories",
        select: [
          "_id",
          "title",
          "details",
          "venue",
          "imageUrl",
          "dateTime",
          "speakersList",
          "streamingUrl",
        ],
      });
    } else if (eventType) {
      events = await Event.find({ eventType }, null, options);
    } else {
      events = await Event.find({}, null, options);
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const testData = {
  title: "Sukti",
  details: "Sukti is a Sanskrit word meaning 'verse' or 'stanza'.",
  eventType: "storyEvent",
  venue: "Online",
  stories: [
    "63511f52ec4e980f092cd6ac",
    "63511f52ec4e980f092cd6ad",
    "63511f52ec4e980f092cd6ae",
    "63511f52ec4e980f092cd6af",
  ],
};

router.post("/add-test", async (req, res) => {
  try {
    const data = new Event(testData);
    console.log(data);
    await data.save();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
module.exports = router;
