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
      content: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.'
    }, {
      title: 'Announcement #5',
      content: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('announcements', null, {});
  }
};
