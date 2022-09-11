"use strict";

const express = require("express");
const router = express.Router({ mergeParams: true });

const eventsAPI = require("./events");
const triviaAPI = require("./trivia");
const userAPI = require("./user");
const recentUpdatesAPI = require("./recentUpdates");
const paymentAPI=require("./payment")

router.use("/events", eventsAPI);
router.use("/trivia", triviaAPI);
router.use("/user", userAPI);
router.use("/recent-updates", recentUpdatesAPI);
router.use("/payment", paymentAPI);

module.exports = router;