const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_BY_PACKAGE_TYPE_SPONSORS = `SELECT * FROM sponsors WHERE package_type = ?`;

const getByPackageType = (type) => {
  return db.query(GET_BY_PACKAGE_TYPE_SPONSORS,  { 
    replacements: [type] , 
    type: Sequelize.QueryTypes.SELECT
  });
};

// Export this call to the rest of the application
module.exports = getByPackageType;