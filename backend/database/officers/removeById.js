const Sequelize = require("sequelize");
const db = require("../connection");

const REMOVE_OFFICER = `DELETE FROM officers WHERE id = ?`;

const removeById = officerId => {
  return db.query(REMOVE_OFFICER, {
    replacements: [officerId],
    type: Sequelize.QueryTypes.DELETE
  });
};

module.exports = removeById;
