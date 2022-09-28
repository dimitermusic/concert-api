const express = require("express");
const router = express.Router();
const Concert = require("../models/Concert");

router.get("/", (req, res) => {
  Concert.findAll()
    .then((concertData) => {
      res.json(concertData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.get("/:id", (req, res) => {
  Concert.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((concertData) => {
      if (concertData) {
        res.json(concertData);
      } else {
        res.status(404).json({ err: "no such concert found!" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  Concert.create({
    eventName: req.body.eventName,
    city: req.body.city,
    venue: req.body.venue,
    date: req.body.date,
    time: req.body.time,
    ticketLink: req.body.ticketLink,
    bandsInTownLink: req.body.bandsInTownLink,
  })
    .then((newConcert) => {
      res.json(newConcert);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.put("/:id", (req, res) => {
  Concert.update(
    {
      eventName: req.body.eventName,
      city: req.body.city,
      venue: req.body.venue,
      date: req.body.date,
      time: req.body.time,
      ticketLink: req.body.ticketLink,
      bandsInTownLink: req.body.bandsInTownLink,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedConcert) => {
      if (updatedConcert) {
        res.json(updatedConcert);
      } else {
        res.status(404).json({ err: "no such concert found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.delete("/:id", (req, res) => {
  Concert.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedConcert) => {
      if (deletedConcert) {
        res.json(deletedConcert);
      } else {
        res.status(404).json({ err: "no such concert found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;
