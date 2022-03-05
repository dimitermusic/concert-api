const express = require('express');
const router = express.Router();
const concertRoutes = require("./concertRoutes");

router.use("/concerts", concertRoutes);

router.get("*", (req, res) => {
    res.send(`Visit <a href="https://api.dimitermusic.com/concerts">https://api.dimitermusic.com/concerts</a> to view Dimiter's concert API.`)
})

module.exports = router;