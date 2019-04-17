const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const GET_BY_ID = `SELECT * FROM sponsors WHERE id = ?`;

const getById = sponsorId => {
  return db.query(GET_BY_ID, {
    replacements: [sponsorId],
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getById;
