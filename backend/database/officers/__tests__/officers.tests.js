require('dotenv').config();
const { Officers } = require('../..');

/* Define Expected Data */
const testOfficer = require('../__test_data__');

/* Unit Tests */
describe(`Test Officers.getAll()`, () => {
  test('Method returns 5 Seeder Officers', () => {
    expect.assertions(1);
    return Officers.getAll().then(data => {
      expect(data).toEqual([
        testOfficer.Theodor,
        testOfficer.Carmelina,
        testOfficer.Garold,
        testOfficer.Felice,
        testOfficer.Stacia
      ]);
    });
  });
});