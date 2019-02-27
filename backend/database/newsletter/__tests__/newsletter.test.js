require('dotenv').config();
const { Newsletter } = require('../..');

/* Define Expected Data */
const seederNewsletters = require('../__test_data__');

/* Unit Tests */
describe(`Test Newsletter.getAll()`, () => {
  test('Method returns 5 Seeder Newsletters', () => {
    expect.assertions(1);
    return Newsletter.getAll().then(data => {
      expect(data).toEqual(seederNewsletters);
    });
  });
});

describe(`Test Newsletter.getRecentByNumber( number )`, () => {
  test('Method returns most recent newsletter', () => {
    expect.assertions(1);
    return Newsletter.getRecentByNumber(1).then(data => {
      expect(data).toEqual([seederNewsletters[4]]);
    });
  });
});