'use strict';
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake slides
    return queryInterface.bulkInsert('slides', [{
      title: 'Slide Deck #1',
      pdf_link: 'www.hacs.com/slides/1',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
    }, {
      title: 'Slide Deck #2',
      pdf_link: 'www.hacs.com/slides/2',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
    }, {
      title: 'Slide Deck #3',
      pdf_link: 'www.hacs.com/slides/3',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
    }, {
      title: 'Slide Deck #4',
      pdf_link: 'www.hacs.com/slides/4',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
    }, {
      title: 'Slide Deck #5',
      pdf_link: 'www.hacs.com/slides/5',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('slides', null, {});
  }
};
