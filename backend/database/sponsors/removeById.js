const Sequelize = require("sequelize");
const db = require("../connection");

const REMOVE_SPONSOR = `DELETE FROM sponsors WHERE id = ?`;

const removeById = sponsorId => {
  return db.query(REMOVE_SPONSOR, {
    replacements: [sponsorId],
    type: Sequelize.QueryTypes.DELETE
  });
};

module.exports = removeById;
