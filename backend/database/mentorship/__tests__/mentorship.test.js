require('dotenv').config();
const { Mentorship } = require('../..');

/* Define Expected Data */
const testMentorshipPair = require('../__test_data__');

/* Unit Tests */
describe(`Test Mentorship.getAll()`, () => {
  test('Method returns 5 Seeder Mentorship Pairs', () => {
    expect.assertions(1);
    return Mentorship.getAll().then(data => {
      expect(data).toEqual([
        testMentorshipPair.One,
        testMentorshipPair.Two,
        testMentorshipPair.Three,
        testMentorshipPair.Four,
        testMentorshipPair.Five,        
      ]);
    });
  });
});