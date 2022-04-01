"use strict";

const express = require("express");
const router = express.Router();
const RecentUpdate = require("../../schemas/recentUpdate");

router.get("/", async (req, res) => {
  try {
    const recentUpdates = await RecentUpdate.find(
      {},
      {
        sort: {
          dateTime: 1,
        },
      }
    );
    return res.status(200).json({ recentUpdates });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err.toString() });
  }
});

router.post("/likes");

module.exports = router;
