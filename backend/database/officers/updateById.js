const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const UPDATE_OFFICER =
  `UPDATE officers ` +
  `SET name = ?, grade_level = ?, description = ?, ` +
  `email = ?, phone_number = ?, photo_link = ? ` +
  `WHERE id = ?`;

const updateById = (
  id,
  name,
  grade_level,
  description,
  email,
  phone_number,
  photo_link
) => {
  return db.query(UPDATE_OFFICER, {
    replacements: [
      name,
      grade_level,
      description,
      email,
      phone_number,
      photo_link,
      id
    ],
    type: Sequelize.QueryTypes.UPDATE
  });
};

// Export this call to the rest of the application
module.exports = updateById;
