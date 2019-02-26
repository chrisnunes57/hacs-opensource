const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_ALL_ANNOUNCEMENTS = `SELECT * FROM announcements WHERE id = ?`;

const getById = (announcement_id) => {
  return db.query(GET_ALL_ANNOUNCEMENTS,  { replacements: [announcement_id] , type: Sequelize.QueryTypes.SELECT});
};

// Export this call to the rest of the application
module.exports = getById;