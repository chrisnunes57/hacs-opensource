// MySQL Database connection to be shared throughout app using Sequelize
const Sequelize = require('sequelize');
const connection = new Sequelize(
  process.env.RDS_DB_NAME,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD, {
    dialect: 'mysql',
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    operatorsAliases: false,
    logging: false
  }
);

// This allows us to reuse our connection
module.exports = connection;