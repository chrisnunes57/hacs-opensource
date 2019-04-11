const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const CREATE_ANNOUNCEMENT = `INSERT INTO announcements ( title, content ) VALUES ( ?, ? );`;

const create = (title, content) => {
  return db.query(CREATE_ANNOUNCEMENT, {
    replacements: [title, content],
    type: Sequelize.QueryTypes.INSERT
  });
};

// Export this call to the rest of the application
module.exports = create;
