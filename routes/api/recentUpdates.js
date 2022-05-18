"use strict";

const express = require("express");
const router = express.Router();
const RecentUpdate = require("../../schemas/recentUpdate");

router.get("/updates", async (req, res) => {
  try {
    // await RecentUpdate.insertMany(dummy);
    const recentUpdates = await RecentUpdate.find(
      {
        inBanner: true,
      },
      null,
      {
        sort: {
          dateTime: 1,
        },
      }
    );
    // console.log(data);

    return res.status(200).json({ recentUpdates });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err.toString() });
  }
});

router.get("/discover", async (req, res) => {
  try {
    // await RecentUpdate.insertMany(dummy);
    const discoverData = await RecentUpdate.find(
      {
        inBanner: false,
      },
      null,
      {
        sort: {
          dateTime: 1,
        },
      }
    );
    // console.log(data);

    return res.status(200).json({ discoverData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err.toString() });
  }
});

// router.post("/likes");

module.exports = router;
