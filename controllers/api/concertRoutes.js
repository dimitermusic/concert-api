const express = require("express");
const router = express.Router();
const Concert = require("../../models");

router.get("/", (req, res) => {
  Concert.findAll()
    .then(concertData => {
      res.json(concertData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.get("/:id", (req, res) => {
  Concert.findOne({
    where: {
      ConcertId: req.params.id
    }
  })
    .then(concertData => {
      res.json(concertData)
    }).catch(err => {
      console.log(err);
    })
})

router.post("/", (req, res) => {
  Concert.create({
    city: req.body.city,
    venue: req.body.venue,
    date: req.body.date,
    price: req.body.price
  }).then(newConcert => {
    res.json(newConcert);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.put("/:id", (req, res) => {
  Comment.update(
    {
      city: req.body.city,
      venue: req.body.venue,
      date: req.body.date,
      price: req.body.price
    },
    {
      where: {
        ConcertId: req.params.id
      }
    })
    .then(updatedConcert => {
      res.json(updatedConcert);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.delete("/:id", (req, res) => {
  Concert.destroy({
    where: {
      ConcertId: req.params.id
    }
  })
    .then(delComment => {
      if (delComment) {
        res.json(delComment);
      } else {
        res.status(404).json({ err: "no such concert found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;