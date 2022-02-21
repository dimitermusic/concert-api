const express = require('express');
const router = express.Router();
const concertRoutes = require("./concertRoutes");

router.use("/concerts", concertRoutes);
router.get("/", (req, res) => {
    res.send("add 'concerts' to this url to view concert API")
})

module.exports = router;