require('dotenv').config();
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
module.exports = {
  One: {
    "id": 1,
    "title": 'Newsletter Title #1',
    "pdf_link": 'fake_pdf_link.com/newsletter1',
    "createdAt": seedDate
  }, 
  Two: {
    "id": 2,
    "title": 'Newsletter Title #2',
    "pdf_link": 'fake_pdf_link.com/newsletter2',
    "createdAt": seedDate
  }, 
  Three: {
    "id": 3,
    "title": 'Newsletter Title #3',
    "pdf_link": 'fake_pdf_link.com/newsletter3',
    "createdAt": seedDate
  }, 
  Four: {
    "id": 4,
    "title": 'Newsletter Title #4',
    "pdf_link": 'fake_pdf_link.com/newsletter4',
    "createdAt": seedDate
  }, 
  Five: {
    "id": 5,
    "title": 'Newsletter Title #5',
    "pdf_link": 'fake_pdf_link.com/newsletter5',
    "createdAt": seedDate
  }
};



