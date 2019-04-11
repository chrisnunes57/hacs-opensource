const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const CREATE_OFFICER =
  `INSERT INTO officers ( name, grade_level, description,` +
  `email, phone_number, photo_link )` +
  `VALUES ( ?, ?, ?, ?, ?, ? );`;

const create = (
  name,
  grade_level,
  description,
  email,
  phone_number,
  photo_link
) => {
  return db.query(CREATE_OFFICER, {
    replacements: [
      name,
      grade_level,
      description,
      email,
      phone_number,
      photo_link
    ],
    type: Sequelize.QueryTypes.INSERT
  });
};

// Export this call to the rest of the application
module.exports = create;
