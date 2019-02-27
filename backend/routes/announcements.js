const express = require('express');
const router = express.Router();
const { Announcements} = require('../database');

// Routes
router.get('/', (request, response, next) => {
  Announcements.getAll().then( (result) => {
    response.status(200).json(result);
  }).catch((error) => {
    response.status(400).json(error);
  });
});

module.exports = router;