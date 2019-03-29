require('dotenv').config();
const { Pictures } = require('../..');

/* Define Expected Data */
const testPicture = require('../__test_data__');

/* Unit Tests */
describe(`Test Pictures.getAll()`, () => {
  test('Method returns 5 Seeder Pictures', () => {
    expect.assertions(1);
    return Pictures.getAll().then(data => {
      expect(data).toEqual([
        testPicture.One,
        testPicture.Two,
        testPicture.Three,
        testPicture.Four,
        testPicture.Five
      ]);
    });
  });
});

describe('Test Pictures.getPictureByAlbumId( album_id )', () => {
  test('Method returns Picture with Album Id = 1', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(1).then(data => {
      expect(data).toEqual([
        testPicture.One
      ]);
    });
  });

  test('Method returns Picture with Album Id = 3', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(3).then(data => {
      expect(data).toEqual([
        testPicture.Three
      ]);
    });
  });

  test('Method returns Picture with Album Id = 5', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(5).then(data => {
      expect(data).toEqual([
        testPicture.Five
      ]);
    });
  });
});

describe(`Test Pictures.getRecentByNumber( number )`, () => {
  test('Method returns most recent picture', () => {
    expect.assertions(1);
    return Pictures.getRecentByNumber(1).then(data => {
      expect(data).toEqual([
        testPicture.Five
      ]);
    });
  });
});