const express = require('express');
const router = express.Router();
const { Announcements} = require('../database');

// Routes

router.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', (request, response, next) => {
  Announcements.getAll().then( (result) => {
    response.status(200).json(result);
  
  }).catch((error) => {
    response.status(400).json(error);
  
  });
});

router.post('/create', (request, response, next) => {
  // TODO - Validate and Sanitize Inputs
  const { title, content } = request.body;

  Announcements.create( title, content ).then( () => {
    response.status(201).json( { msg: `Announcement "${title}" has been saved.`} );
  
  }).catch( (error) => {
    response.status(400).json( { error: "New announcement was not created." } );
  
  });
});

router.post('/remove/:id', (request, response, next) => {
  // TODO - Validate and Sanitize Inputs

  Announcements.removeById( request.params.id ).then( () => {
    response.status(200).json( { msg: `Removed Announcement ID: ${request.params.id}` } );

  }).catch( (error) => {
    console.log(error);
    response.status(400).json( { error: `Unable to remove Announcement ID: ${request.params.id}` } );

  });
});

module.exports = router;