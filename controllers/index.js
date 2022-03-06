const express = require('express');
const router = express.Router();
const concertRoutes = require("./concertRoutes");
const path = require('path');

router.use("/concerts", concertRoutes);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
})

module.exports = router;