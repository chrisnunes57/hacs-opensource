'use strict';
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake mentorship pairs
    return queryInterface.bulkInsert('mentorship_program', [{
      mentor: 'Berky Vasyagin',
      mentee: 'Patric Jobb',
      point_total: 35,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
    }, {
      mentor: 'Piper Crasford',
      mentee: 'Odo Boays',
      point_total: 18,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
    }, {
      mentor: 'Johannah Matis',
      mentee: 'Andros Myatt',
      point_total: 51,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
    }, {
      mentor: 'Mahalia Anglish',
      mentee: 'Arvie Haydn',
      point_total: 7,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
    }, {
      mentor: 'Rayner Grain',
      mentee: 'Ericha Jiruch',
      point_total: 12,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('mentorship_program', null, {});
  }
};
