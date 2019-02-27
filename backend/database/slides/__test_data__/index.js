require('dotenv').config();
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
module.exports = [
  {
    "id": 1,
    "title": 'Slide Deck #1',
    "pdf_link": 'www.hacs.com/slides/1',
    "createdAt": seedDate
  }, {
    "id": 2,
    "title": 'Slide Deck #2',
    "pdf_link": 'www.hacs.com/slides/2',
    "createdAt": seedDate
  }, {
    "id": 3,
    "title": 'Slide Deck #3',
    "pdf_link": 'www.hacs.com/slides/3',
    "createdAt": seedDate
  }, {
    "id": 4,
    "title": 'Slide Deck #4',
    "pdf_link": 'www.hacs.com/slides/4',
    "createdAt": seedDate
  }, {
    "id": 5,
    "title": 'Slide Deck #5',
    "pdf_link": 'www.hacs.com/slides/5',
    "createdAt": seedDate
  }
];
