const express = require('express');
const router = express.Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

router.get("*", (req, res) => {
    res.send(`Visit <a href="https://concert-api-5i4uylvzdq-wl.a.run.app/api/concerts">https://concert-api-5i4uylvzdq-wl.a.run.app/api/concerts</a> to view Dimiter's concert API.`)
})

module.exports = router;