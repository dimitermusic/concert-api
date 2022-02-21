const express = require('express');
const router = express.Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
    res.send("Add '/api/concerts' to this url to view Dimiter's concert API!")
})

module.exports = router;