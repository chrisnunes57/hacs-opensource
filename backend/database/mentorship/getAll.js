const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_ALL_MENTORSHIP_PAIRS = `SELECT * FROM mentorship_program`;

const getAll = () => {
  return db.query(GET_ALL_MENTORSHIP_PAIRS, {
    type: Sequelize.QueryTypes.SELECT
  });
};
// Export this call to the rest of the application
module.exports = getAll;