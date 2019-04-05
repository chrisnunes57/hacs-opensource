'use strict';
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake newsletters
    return queryInterface.bulkInsert('newsletters', [{
      title: 'Newsletter Title #1',
      pdf_link: 'fake_pdf_link.com/newsletter1',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
    }, {
      title: 'Newsletter Title #2',
      pdf_link: 'fake_pdf_link.com/newsletter2',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
    }, {
      title: 'Newsletter Title #3',
      pdf_link: 'fake_pdf_link.com/newsletter3',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
    }, {
      title: 'Newsletter Title #4',
      pdf_link: 'fake_pdf_link.com/newsletter4',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
    }, {
      title: 'Newsletter Title #5',
      pdf_link: 'fake_pdf_link.com/newsletter5',
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('newsletters', null, {});
  }
};
