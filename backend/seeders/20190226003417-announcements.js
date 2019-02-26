'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake announcements
    return queryInterface.bulkInsert('announcements', [{
      title: 'Announcement #1',
      content: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.'
    }, {
      title: 'Announcement #2',
      content: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.'
    }, {
      title: 'Announcement #3',
      content: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
    }, {
      title: 'Announcement #4',
      content: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
    }, {
      title: 'Announcement #5',
      content: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('announcements', null, {});
  }
};
