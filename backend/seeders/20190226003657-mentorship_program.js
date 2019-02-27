'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake mentorship pairs
    return queryInterface.bulkInsert('mentorship_program', [{
      mentor: 'Berky Vasyagin',
      mentee: 'Patric Jobb',
      point_total: 35,
    }, {
      mentor: 'Piper Crasford',
      mentee: 'Odo Boays',
      point_total: 18,
    }, {
      mentor: 'Johannah Matis',
      mentee: 'Andros Myatt',
      point_total: 51,
    }, {
      mentor: 'Mahalia Anglish',
      mentee: 'Arvie Haydn',
      point_total: 7,
    }, {
      mentor: 'Rayner Grain',
      mentee: 'Ericha Jiruch',
      point_total: 12,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('mentorship_program', null, {});
  }
};
