'use strict';
module.exports = (sequelize, DataTypes) => {
  const announcements = sequelize.define('announcements', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  announcements.associate = function(models) {
    // associations can be defined here
  };
  return announcements;
};