"use strict";

const express = require("express");
const router = express.Router();
const Trivia = require("../../schemas/trivia");
const withAuth = require("../../middleware/auth");

router.get("/", async (req, res) => {
    try {
        const trivias = await Trivia.find(
            {},
            [ "imageUrl", "title", "questionCount", "totalTime", "_id" ],
            {
                sort: {
                    _createdAt: 1,
                },
            }
        );
        return res.status(200).json(trivias);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.toString() });
    }

});

router.get("/:id", async (req, res) => {
    const { id } = req.query;
    console.log(id);
    try {
        const trivias = await Trivia.findById(id, null, {
            sort: {
                _createdAt: 1,
            },
        });
        return res.status(200).json(trivias);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.toString() });
    };
});

module.exports = router;

