require('dotenv').config();
const {Announcements} = require('../..');

// Return this in methods we need to implement
//  return new Promise((resolve, reject) => { resolve({ msg: "TODO"}); });


const announcement1 = {"id": 1,"title": "Announcement #1","content": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.","createdAt": new Date(Date.parse("2019-02-26T01:57:21.000Z")) };
const announcement2 = {"id": 2,"title": "Announcement #2","content": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.","createdAt": new Date(Date.parse("2019-02-26T01:57:21.000Z")) };
const announcement3 = {"id": 3,"title": "Announcement #3","content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","createdAt": new Date(Date.parse("2019-02-26T01:57:21.000Z")) };
const announcement4 = {"id": 4,"title": "Announcement #4","content": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.","createdAt": new Date(Date.parse("2019-02-26T01:57:21.000Z")) };
const announcement5 = {"id": 5,"title": "Announcement #5","content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","createdAt": new Date(Date.parse("2019-02-26T01:57:21.000Z")) };

describe(`Test Announcement.getAll()`, () => {

  const seederAnnouncements = [
    announcement1, announcement2, announcement3, announcement4, announcement5
  ];
  test('Method returns 5 Seeder Announcements', () => {
    expect.assertions(1);
    return Announcements.getAll().then(data => {
      expect(JSON.stringify(data)).toEqual(JSON.stringify(seederAnnouncements));
    });
  });
});

describe('Test Announcements.getById( id ) with 2 different ids',  () => {
  test('Returns announcement with id = 1', () => {
    expect.assertions(1);
    return Announcements.getById(1).then(data => {
      expect(data).toEqual([announcement1]);
    });
  });

  test('Returns announcement with id = 5', () => {
    expect.assertions(1);
    return Announcements.getById(5).then(data => {
      expect(data).toEqual([announcement5]);
    });
  });
});

describe('Test Announcements.getRecentByNumber( number )', () => {
  test('Returns most recent Announcement', () => {
    expect.assertions(1);
    return Announcements.getRecentByNumber(1).then(data => {
      expect(data).toEqual([announcement5]);
    });
  });

  test('Returns 3 most recent announcements', () => {
    expect.assertions(1);
    return Announcements.getRecentByNumber(3).then(data => {
      expect(data).toEqual([announcement3, announcement4, announcement5]);
    });
  });
});