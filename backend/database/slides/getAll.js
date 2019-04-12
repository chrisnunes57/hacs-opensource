const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const GET_ALL_SLIDES = `SELECT * FROM slides`;

const getAll = () => {
  return db.query(GET_ALL_SLIDES, {
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getAll;
