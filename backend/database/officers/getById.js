const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const GET_BY_ID = `SELECT * FROM officers WHERE id = ?`;

const getById = officerId => {
  return db.query(GET_BY_ID, {
    replacements: [officerId],
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getById;
