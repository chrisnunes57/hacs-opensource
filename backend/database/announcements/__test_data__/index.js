require('dotenv').config();
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
module.exports = {
  announcementOne: {
    "id": 1,
    "title": "Announcement #1",
    "content": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "createdAt": seedDate
  },
  announcementTwo: {
    "id": 2,
    "title": "Announcement #2",
    "content": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    "createdAt": seedDate
  },
  announcementThree: {
    "id": 3,
    "title": "Announcement #3",
    "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "createdAt": seedDate
  },
  announcementFour: {
    "id": 4,
    "title": "Announcement #4",
    "content": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "createdAt": seedDate
  },
  announcementFive: {
    "id": 5,
    "title": "Announcement #5",
    "content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "createdAt": seedDate
  }
};