require('dotenv').config();
const { Slides } = require('../..');

/* Define Expected Data */
const testSlide = require('../__test_data__');

/* Unit Tests */
describe(`Test Slides.getAll()`, () => {
  test('Method returns 5 Seeder Slides', () => {
    expect.assertions(1);
    return Slides.getAll().then(data => {
      expect(data).toEqual([
        testSlide.One,
        testSlide.Two,
        testSlide.Three,
        testSlide.Four,
        testSlide.Five
      ]);
    });
  });
});

describe(`Test Slides.getRecentByNumber( number )`, () => {
  test('Method returns most recent Slide', () => {
    expect.assertions(1);
    return Slides.getRecentByNumber(1).then(data => {
      expect(data).toEqual([
        testSlide.Five
      ]);
    });
  });
});