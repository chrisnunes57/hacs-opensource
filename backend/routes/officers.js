const express = require("express");
const router = express.Router();
const { Officers } = require("../database");

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
  Officers.getAll()
    .then(result => {
      response.status(200).json(result);
    })
    .catch(error => {
      response.status(400).json(error);
    });
});

router.get("/:id", (request, response, next) => {
  Officers.getById(request.params.id)
    .then(result => {
      response.status(200).json(result);
    })
    .catch(error => {
      response.status(400).json(error);
    });
});

router.post("/create", (request, response, next) => {
  // TODO - Validate and Sanitize Inputs
  const {
    name,
    grade_level,
    description,
    email,
    phone_number,
    photo_link
  } = request.body;

  Officers.create(
    name,
    grade_level,
    description,
    email,
    phone_number,
    photo_link
  )
    .then(() => {
      response.status(201).json({ msg: `Officer "${name}" has been saved.` });
    })
    .catch(error => {
      response.status(400).json({ error: "New officer was not created." });
    });
});

router.post("/update/:id", (request, response, next) => {
  // TODO - Validate and Sanitize Inputs
  const {
    name,
    grade_level,
    description,
    email,
    phone_number,
    photo_link
  } = request.body;

  Officers.updateById(
    request.params.id,
    name,
    grade_level,
    description,
    email,
    phone_number,
    photo_link
  )
    .then(() => {
      response.status(201).json({ msg: `Officer "${name}" has been saved.` });
    })
    .catch(error => {
      response.status(400).json({ error: "New officer was not created." });
    });
});

router.post("/remove/:id", (request, response, next) => {
  // TODO - Validate and Sanitize Inputs

  Officers.removeById(request.params.id)
    .then(() => {
      response
        .status(200)
        .json({ msg: `Removed Officer ID: ${request.params.id}` });
    })
    .catch(error => {
      console.log(error);
      response.status(400).json({
        error: `Unable to remove Officer ID: ${request.params.id}`
      });
    });
});

module.exports = router;
