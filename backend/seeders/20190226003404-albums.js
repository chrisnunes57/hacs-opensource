'use strict';
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake albums
    return queryInterface.bulkInsert('albums', [{
      name: 'Album #1',
      description: 'Album #1 Description',
      album_size: 1,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
    }, {
      name: 'Album #2',
      description: 'Album #2 Description',
      album_size: 1,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
    }, {
      name: 'Album #3',
      description: 'Album #3 Description',
      album_size: 1,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
    }, {
      name: 'Album #4',
      description: 'Album #4 Description',
      album_size: 1,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
    }, {
      name: 'Album #5',
      description: 'Album #5 Description',
      album_size: 1,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('albums', null, {});
  }
};
