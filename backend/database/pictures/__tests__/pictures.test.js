require('dotenv').config();
const { Pictures } = require('../..');

/* Define Expected Data */
// Pull the Date that you Seeded your DB with
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
const seederPictures = require('../__test_data__');


/* Unit Tests */
describe(`Test Pictures.getAll()`, () => {
  test('Method returns 5 Seeder Pictures', () => {
    expect.assertions(1);
    return Pictures.getAll().then(data => {
      expect(data).toEqual(seederPictures);
    });
  });
});

describe('Test Pictures.getPictureByAlbumId( album_id )', () => {
  test('Method returns Picture with Album Id = 1', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(1).then(data => {
      expect(data).toEqual([seederPictures[0]]);
    });
  });

  test('Method returns Picture with Album Id = 3', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(3).then(data => {
      expect(data).toEqual([seederPictures[2]]);
    });
  });

  test('Method returns Picture with Album Id = 5', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(5).then(data => {
      expect(data).toEqual([seederPictures[0]]);
    });
  });
});

describe(`Test Pictures.getRecentByNumber( number )`, () => {
  test('Method returns most recent picture', () => {
    expect.assertions(1);
    return Pictures.getRecentByNumber(1).then(data => {
      expect(data).toEqual([seederPictures[4]]);
    });
  });
});