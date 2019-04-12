// Require this to pass in Query Type, otherwise
// Sequelize replies with Results and Unwanted Metadata
const Sequelize = require("sequelize");
// Reusing the connection
const db = require("../connection");

// Sequel Query
const GET_ALL_ANNOUNCEMENTS = `SELECT * FROM announcements`;

const getAll = () => {
  // Returns a promise with resulting data
  return db.query(GET_ALL_ANNOUNCEMENTS, {
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getAll;
