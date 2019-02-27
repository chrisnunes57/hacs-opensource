const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query

const getRecentNumber= (number) => {
  return new Promise((resolve, reject) => {resolve({msg: "TODO"});});
};

// Export this call to the rest of the application
module.exports = getRecentNumber;