const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_BY_ID = `SELECT * FROM announcements WHERE id = ?`;

const getById = (announcement_id) => {
  return db.query(GET_BY_ID,  { 
    replacements: [announcement_id] , 
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getById;