require('dotenv').config();
const { Mentorship } = require('../..');

/* Define Expected Data */
const testMentorshipPair = require('../__test_data__');

/* Unit Tests */
describe(`Unit Test - Mentorship.getAll()`, () => {
  test('Method returns 5 Seeder Mentorship Pairs', () => {
    expect.assertions(1);
    return Mentorship.getAll().then(data => {
      expect(data).toEqual([
        testMentorshipPair.BerkyPatric,
        testMentorshipPair.PiperOdo,
        testMentorshipPair.JohannahAndros,
        testMentorshipPair.MahliaArvie,
        testMentorshipPair.RaynerEricha,        
      ]);
    });
  });
});