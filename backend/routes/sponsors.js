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

router.post("/create", (request, response, next) => {
  // TODO - Validate and Sanitize Inputs
  const {
    name,
    package_level,
    logo_link
  } = request.body;

  Sponsors.create(
      name,
      package_level,
      logo_link
    )
    .then(() => {
      response.status(201).json({
        msg: `Sponsor "${name}" has been saved.`
      });
    })
    .catch(error => {
      response.status(400).json({
        error: "New sponsor was not created."
      });
    });
});

router.post("/update/:id", (request, response, next) => {
  // TODO - Validate and Sanitize Inputs
  const {
    name,
    package_level,
    logo_link
  } = request.body;

  Sponsors.updateById(
      request.params.id,
      name,
      package_level,
      logo_link
    )
    .then(() => {
      response.status(201).json({
        msg: `Sponsor "${name}" has been updated.`
      });
    })
    .catch(error => {
      response.status(400).json({
        error: `Sponsor "${name}" was not updated.`
      });
    });
});

router.post("/remove/:id", (request, response, next) => {
  // TODO - Validate and Sanitize Inputs

  Sponsors.removeById(request.params.id)
    .then(() => {
      response
        .status(200)
        .json({
          msg: `Removed Sponsor ID: ${request.params.id}`
        });
    })
    .catch(error => {
      console.log(error);
      response.status(400).json({
        error: `Unable to remove Sponsor ID: ${request.params.id}`
      });
    });
});


module.exports = router;
