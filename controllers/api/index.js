const express = require('express');
const router = express.Router();
const concertRoutes = require("./concertRoutes");

router.use("/concerts", concertRoutes);
router.get("/", (req, res) => {
    res.send("Add 'concerts' to this url to view Dimiter's concert API!")
})

module.exports = router;