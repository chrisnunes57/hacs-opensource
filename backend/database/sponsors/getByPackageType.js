const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const RENAME_THIS_QUERY = ``;

const getByPackageType= (type) => {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "TODO"
    });
  });
};

// Export this call to the rest of the application
module.exports = getByPackageType;