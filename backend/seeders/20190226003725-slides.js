'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake slides
    return queryInterface.bulkInsert('slides', [{
      title: 'Slide Deck #1',
      pdf_link: 'www.hacs.com/slides/1'
    }, {
      title: 'Slide Deck #2',
      pdf_link: 'www.hacs.com/slides/2'
    }, {
      title: 'Slide Deck #3',
      pdf_link: 'www.hacs.com/slides/3'
    }, {
      title: 'Slide Deck #4',
      pdf_link: 'www.hacs.com/slides/4'
    }, {
      title: 'Slide Deck #5',
      pdf_link: 'www.hacs.com/slides/5'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('slides', null, {});
  }
};
