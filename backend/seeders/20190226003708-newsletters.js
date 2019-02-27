'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake newsletters
    return queryInterface.bulkInsert('newsletters', [{
      title: 'Newsletter Title #1',
      pdf_link: 'fake_pdf_link.com/newsletter1'
    }, {
      title: 'Newsletter Title #2',
      pdf_link: 'fake_pdf_link.com/newsletter2'
    }, {
      title: 'Newsletter Title #3',
      pdf_link: 'fake_pdf_link.com/newsletter3'
    }, {
      title: 'Newsletter Title #4',
      pdf_link: 'fake_pdf_link.com/newsletter4'
    }, {
      title: 'Newsletter Title #5',
      pdf_link: 'fake_pdf_link.com/newsletter5'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('newsletters', null, {});
  }
};
