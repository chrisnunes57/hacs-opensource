const express = require("express");
const router = express.Router();
const { Sponsors } = require("../database");

// Routes

router.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", (request, response, next) => {
  Sponsors.getAll()
    .then(result => {
      response.status(200).json(result);
    })
    .catch(error => {
      response.status(400).json({
        error: `Unable to fetch sponsors`
      });
    });
});

router.get("/:type", (request, response, next) => {
  Sponsors.getByPackageType(request.params.type)
    .then(result => {
      response.status(200).json(result);
    })
    .catch(error => {
      response.status(400).json({
        error: `Unable to fetch sponsors`
      });
    });
});

module.exports = router;
