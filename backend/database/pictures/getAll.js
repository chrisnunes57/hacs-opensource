const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const GET_ALL_PICTURES = `SELECT * FROM pictures`;

const getAll = () => {
  return db.query(GET_ALL_PICTURES, {
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getAll;
