const Sequelize = require("sequelize");
const db = require("../connection");

const REMOVE_ANNOUNCEMENT = `DELETE FROM announcements WHERE id = ?`;

const removeById = announcement_id => {
  return db.query(REMOVE_ANNOUNCEMENT, {
    replacements: [announcement_id],
    type: Sequelize.QueryTypes.DELETE
  });
};

module.exports = removeById;
