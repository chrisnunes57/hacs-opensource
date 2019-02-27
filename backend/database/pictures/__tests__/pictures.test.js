require('dotenv').config();
const { Pictures } = require('../..');

/* Define Expected Data */
// Pull the Date that you Seeded your DB with
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
const picture1 = {
  "image_link": 'https://robohash.org/ipsamdebitiscommodi.jpg?size=200x200&set=set1',
  "album_id": 1,
  "createdAt": seedDate
};

const picture2 = {
  "image_link": 'https://robohash.org/ipsumfacereaccusamus.jpg?size=200x200&set=set1',
  "album_id": 2,
  "createdAt": seedDate
};

const picture3 = {
  "image_link": 'https://robohash.org/nostrumminimadolorem.png?size=200x200&set=set1',
  "album_id": 3,
  "createdAt": seedDate
};

const picture4 = {
  "image_link": 'https://robohash.org/exercitationemautvoluptate.jpg?size=200x200&set=set1',
  "album_id": 4,
  "createdAt": seedDate
};

const picture5 = {
  "image_link": 'https://robohash.org/voluptatemporrofugit.jpg?size=200x200&set=set1',
  "album_id": 5,
  "createdAt": seedDate
};


/* Unit Tests */
describe(`Test Pictures.getAll()`, () => {
  const seederPictures = [
    picture1, picture2, picture3, picture4, picture5
  ];
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
      expect(data).toEqual([picture1]);
    });
  });

  test('Method returns Picture with Album Id = 3', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(3).then(data => {
      expect(data).toEqual([picture3]);
    });
  });

  test('Method returns Picture with Album Id = 5', () => {
    expect.assertions(1);
    return Pictures.getPictureByAlbumId(5).then(data => {
      expect(data).toEqual([picture1]);
    });
  });
});

describe(`Test Pictures.getRecentByNumber( number )`, () => {
  test('Method returns most recent picture', () => {
    expect.assertions(1);
    return Pictures.getRecentByNumber(1).then(data => {
      expect(data).toEqual(picture5);
    });
  });
});