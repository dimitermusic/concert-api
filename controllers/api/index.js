const express = require('express');
const router = express.Router();
const concertRoutes = require("./concertRoutes");

router.use("/concerts", concertRoutes);

module.exports = router;