const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const GET_PICTURE_BY_ALBUM_ID = `SELECT * FROM pictures WHERE album_id = ?`;

const getPictureByAlbumId = album_id => {
  return db.query(GET_PICTURE_BY_ALBUM_ID, {
    replacements: [album_id],
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getPictureByAlbumId;
