const Sequelize = require('sequelize');
const db = require('../connection');

// Sequel Query
const GET_RECENT_BY_NUMBER = `SELECT * FROM newsletters WHERE date =  `;

const getRecentByNumber = (number) => {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "TODO"
    });
  });
};

// Export this call to the rest of the application
module.exports = getRecentByNumber;