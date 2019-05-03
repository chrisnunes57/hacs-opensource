require("dotenv").config();
const { Newsletters } = require("../..");

/* Define Expected Data */
const testNewsletters = require("../__test_data__");

/* Unit Tests */
describe(`Unit Test - Newsletter.getAll()`, () => {
  test("Method returns 5 Seeder Newsletters", () => {
    expect.assertions(1);
    return Newsletters.getAll().then(data => {
      expect(data).toEqual([
        testNewsletters.One,
        testNewsletters.Two,
        testNewsletters.Three,
        testNewsletters.Four,
        testNewsletters.Five
      ]);
    });
  });
});

describe(`Unit Test - Newsletter.getRecentByNumber( number )`, () => {
  test("Method returns most recent newsletter", () => {
    expect.assertions(1);
    return Newsletters.getRecentByNumber(1).then(data => {
      expect(data).toEqual([testNewsletters.Five]);
    });
  });
});
