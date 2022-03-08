"use strict";

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Event = require("../../schemas/event");
// const withAuth = require("../../middleware/auth");

router.get("/", async (req, res) => {
  //   console.log("getting events");
  //   console.log(req.query);
  console.log(mongoose.connection.readyState);
  let { eventType, sortBy, sortOrder, page, limit } = req.query;
  sortOrder = sortOrder || "asc";
  page = page || 1;
  limit = limit || null;
  sortBy = sortBy || "dateTime";
  try {
    const events = await Event.find({ eventType }, null, {
      sort: { [sortBy]: sortOrder === "asc" ? 1 : -1 },
      skip: (page - 1) * limit,
      limit,
    });
    console.log(events);
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
