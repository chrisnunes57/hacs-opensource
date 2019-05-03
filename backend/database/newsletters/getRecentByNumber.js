const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const GET_RECENT_BY_NUMBER = `SELECT * FROM newsletters ORDER BY id DESC LIMIT ?`;

const getRecentByNumber = number => {
  return db.query(GET_RECENT_BY_NUMBER, {
    replacements: [number],
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getRecentByNumber;
