const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const UPDATE_SPONSOR =
  `UPDATE sponsors ` +
  `SET name = ?, package_type = ?, logo_link = ? ` +
  `WHERE id = ?`;

const updateById = (
  id,
  name,
  package_type,
  logo_link
) => {
  return db.query(UPDATE_SPONSOR, {
    replacements: [
      name,
      package_type,
      logo_link,
      id
    ],
    type: Sequelize.QueryTypes.UPDATE
  });
};

// Export this call to the rest of the application
module.exports = updateById;
