const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_BY_ID = `SELECT * FROM albums WHERE id = ?`;

const getById = (album_id) => {
  return db.query(GET_BY_ID, {
    replacements: [album_id],
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getById;