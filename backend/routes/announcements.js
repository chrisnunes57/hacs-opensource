const express = require('express');
const router = express.Router();
const { Announcements} = require('../database');

// Routes

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', (request, response, next) => {
  Announcements.getAll().then( (result) => {
    response.status(200).json(result);
  }).catch((error) => {
    response.status(400).json(error);
  });
});

module.exports = router;