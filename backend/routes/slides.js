const express = require("express");
const router = express.Router();
const { Slides} = require("../database");

// Routes
//todo:create an update for announcements
router.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", (request, response, next) => {
  Slides.getAll()
    .then(result => {
      response.status(200).json(result);
    })
    .catch(error => {
      response.status(400).json({ error: "Couldn't fetch announcements." });
    });
});

module.exports = router;
