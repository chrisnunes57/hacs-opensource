require('dotenv').config();

module.exports = {
  One: {
    "id": 1,
    "title": 'Newsletter Title #1',
    "pdf_link": 'fake_pdf_link.com/newsletter1',
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_ONE))
  }, 
  Two: {
    "id": 2,
    "title": 'Newsletter Title #2',
    "pdf_link": 'fake_pdf_link.com/newsletter2',
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_TWO))
  }, 
  Three: {
    "id": 3,
    "title": 'Newsletter Title #3',
    "pdf_link": 'fake_pdf_link.com/newsletter3',
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_THREE))
  }, 
  Four: {
    "id": 4,
    "title": 'Newsletter Title #4',
    "pdf_link": 'fake_pdf_link.com/newsletter4',
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_FOUR))
  }, 
  Five: {
    "id": 5,
    "title": 'Newsletter Title #5',
    "pdf_link": 'fake_pdf_link.com/newsletter5',
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_FIVE))
  }
};



