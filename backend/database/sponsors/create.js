const Sequelize = require("sequelize");
const db = require("../connection");

// Sequel Query
const CREATE_SPONSOR =
  `INSERT INTO sponsors ( name, package_type, logo_link) ` +
  `VALUES ( ?, ?, ?);`;

const create = (
  name,
  package_type,
  logo_link
) => {
  return db.query(CREATE_SPONSOR, {
    replacements: [
      name,
      package_type,
      logo_link
    ],
    type: Sequelize.QueryTypes.INSERT
  });
};

// Export this call to the rest of the application
module.exports = create;
