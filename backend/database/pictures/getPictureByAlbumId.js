const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const RENAME_THIS_QUERY = ``;

const getPictureByAlbumId = (album_id) => {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "TODO"
    });
  });
};

// Export this call to the rest of the application
module.exports = getPictureByAlbumId;