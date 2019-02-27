require('dotenv').config();
const { Sponsors } = require('../..');

/* Define Expected Data */
const seederSponsors = require('../__test_data__');

/* Unit Tests */
describe(`Test Sponsors.getAll()`, () => {
  test('Method returns 5 Seeder Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getAll().then(data => {
      expect(data).toEqual(seederSponsors);
    });
  });
});

describe('Test Announcements.getByPackageType( type ) with all types', () => {
  test('Returns Platinum Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('platinum').then(data => {
      expect(data).toEqual([seederSponsors[0], seederSponsors[4]]);
    });
  });

  test('Returns Gold Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('gold').then(data => {
      expect(data).toEqual([seederSponsors[1]]);
    });
  });

  test('Returns Silver Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('silver').then(data => {
      expect(data).toEqual([seederSponsors[2]]);
    });
  });

  test('Returns Bronze Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('bronze').then(data => {
      expect(data).toEqual([seederSponsors[3]]);
    });
  });
});
