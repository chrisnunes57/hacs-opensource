'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake albums
    return queryInterface.bulkInsert('albums', [{
      name: 'Album #1',
      description: 'Album #1 Description',
      album_size: 1
    }, {
      name: 'Album #2',
      description: 'Album #2 Description',
      album_size: 1
    }, {
      name: 'Album #3',
      description: 'Album #3 Description',
      album_size: 1
    }, {
      name: 'Album #4',
      description: 'Album #4 Description',
      album_size: 1
    }, {
      name: 'Album #5',
      description: 'Album #5 Description',
      album_size: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('albums', null, {});
  }
};
