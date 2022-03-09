"use strict";

const express = require("express");
const router = express.Router({ mergeParams: true });

const eventsAPI = require("./events");
const triviaAPI = require("./trivia");
const userAPI = require("./user");

router.use("/events", eventsAPI);
router.use("/trivia", triviaAPI);
router.use("/user", userAPI);

module.exports = router;
