const express = require('express');
const router = express.Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

router.get("*", (req, res) => {
    res.send(`Visit <a href="https://dimiter-concert-api.wl.r.appspot.com/api/concerts">https://dimiter-concert-api.wl.r.appspot.com/api/concerts</a> to view Dimiter's concert API.`)
})

module.exports = router;