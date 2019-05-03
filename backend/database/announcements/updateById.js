const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const UPDATE_ANNOUNCEMENT =
  `UPDATE announcements ` +
  `SET title = ?, content = ? ` +
  `WHERE id = ?`;

const updateById = (
  id,
  title,
  content
) => {
  return db.query(UPDATE_ANNOUNCEMENT, {
    replacements: [
      title,
      content,
      id
    ],
    type: Sequelize.QueryTypes.UPDATE
  });
};

// Export this call to the rest of the application
module.exports = updateById;
