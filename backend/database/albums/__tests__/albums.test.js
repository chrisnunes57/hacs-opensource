require('dotenv').config();
const { Albums } = require('../..');

/* Define Expected Data */
const testAlbums = require('../__test_data__');

/* Unit Tests */
describe(`Test Announcement.getAll()`, () => {
  test('Method returns 5 Seeder Albums', () => {
    expect.assertions(1);
    return Albums.getAll().then(data => {
      expect(data).toEqual([
        testAlbums.One,
        testAlbums.Two,
        testAlbums.Three,
        testAlbums.Four,
        testAlbums.Five
      ]);
    });
  });
});

describe('Test Albums.getById( id ) with 2 different ids', () => {
  test('Returns announcement with id = 1', () => {
    expect.assertions(1);
    return Albums.getById(1).then(data => {
      expect(data).toEqual([
        testAlbums.One
      ]);
    });
  });

  test('Returns announcement with id = 5', () => {
    expect.assertions(1);
    return Albums.getById(5).then(data => {
      expect(data).toEqual([
        testAlbums.Five
      ]);
    });
  });
});

describe('Test Albums.getRecentByNumber( number )', () => {
  test('Returns most recent Announcement', () => {
    expect.assertions(1);
    return Albums.getRecentByNumber(1).then(data => {
      expect(data).toEqual([
        testAlbums.Five
      ]);
    });
  });

  test('Returns 3 most recent announcements', () => {
    expect.assertions(1);
    return Albums.getRecentByNumber(3).then(data => {
      expect(data).toEqual([
        testAlbums.Five,
        testAlbums.Four,
        testAlbums.Three
      ]);
    });
  });
});