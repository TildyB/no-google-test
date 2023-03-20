const mongoose = require("mongoose");
const Word = require("../model/wordSchema");
const router = require("express").Router();

router.get("/", async(req, res) => {
    const [getData] = await Word.find(
        {
            content: "Public",
        },
    )

    res.send(getData.content);
});

module.exports = router;


