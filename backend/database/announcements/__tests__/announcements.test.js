require('dotenv').config();
const {
  Announcements
} = require('../..');

/* Define Expected Data */
const announcementData = require('../__test_data__');

/* Unit Tests */
describe(`Test Announcement.getAll()`, () => {
  test('Method returns 5 Seeder Announcements', () => {
    expect.assertions(1);
    return Announcements.getAll().then(data => {
      expect(data).toEqual([announcementData.announcementOne,
        announcementData.announcementTwo,
        announcementData.announcementThree,
        announcementData.announcementFour,
        announcementData.announcementFive
      ]);
    });
  });
});

describe('Test Announcements.getById( id ) with 2 different ids', () => {
  test('Returns announcement with id = 1', () => {
    expect.assertions(1);
    return Announcements.getById(1).then(data => {
      expect(data).toEqual([announcementData.announcementOne]);
    });
  });

  test('Returns announcement with id = 5', () => {
    expect.assertions(1);
    return Announcements.getById(5).then(data => {
      expect(data).toEqual([announcementData.announcementFive]);
    });
  });
});

describe('Test Announcements.getRecentByNumber( number )', () => {
  test('Returns most recent Announcement', () => {
    expect.assertions(1);
    return Announcements.getRecentByNumber(1).then(data => {
      expect(data).toEqual([announcementData.announcementFive]);
    });
  });

  test('Returns 3 most recent announcements', () => {
    expect.assertions(1);
    return Announcements.getRecentByNumber(3).then(data => {
      expect(data).toEqual([announcementData.announcementFive,
        announcementData.announcementFour,
        announcementData.announcementThree
      ]);
    });
  });
});