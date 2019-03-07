require('dotenv').config();
const { Newsletter } = require('../..');

/* Define Expected Data */
const testNewsletter = require('../__test_data__');

/* Unit Tests */
describe(`Test Newsletter.getAll()`, () => {
  test('Method returns 5 Seeder Newsletters', () => {
    expect.assertions(1);
    return Newsletter.getAll().then(data => {
      expect(data).toEqual([
        testNewsletter.One,
        testNewsletter.Two,
        testNewsletter.Three,
        testNewsletter.Four,
        testNewsletter.Five,
      ]);
    });
  });
});

describe(`Test Newsletter.getRecentByNumber( number )`, () => {
  test('Method returns most recent newsletter', () => {
    expect.assertions(1);
    return Newsletter.getRecentByNumber(1).then(data => {
      expect(data).toEqual([
        testNewsletter.Five
      ]);
    });
  });
});