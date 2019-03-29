const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_RECENT_BY_NUMBER = `SELECT * FROM pictures ORDER BY createdAT DESC LIMIT ?, 1`;

const getRecentByNumber = (number) => {
  return db.query(GET_RECENT_BY_NUMBER,  { 
    replacements: [number-1] , 
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getRecentByNumber;