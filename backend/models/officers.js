'use strict';
module.exports = (sequelize, DataTypes) => {
  const officers = sequelize.define('officers', {
    name: DataTypes.STRING,
    grade_level: DataTypes.STRING,
    description: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    photo_link: DataTypes.STRING
  }, {});
  officers.associate = function(models) {
    // associations can be defined here
  };
  return officers;
};