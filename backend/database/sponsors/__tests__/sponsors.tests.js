require('dotenv').config();
const { Sponsors } = require('../..');

/* Define Expected Data */
const testSponsor = require('../__test_data__');

/* Unit Tests */
describe(`Test Sponsors.getAll()`, () => {
  test('Method returns 5 Seeder Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getAll().then(data => {
      expect(data).toEqual([
        testSponsor.Facebook,
        testSponsor.Microsoft,
        testSponsor.Adobe,
        testSponsor.Amazon,
        testSponsor.Google
      ]);
    });
  });
});

describe('Test Announcements.getByPackageType( type ) with all types', () => {
  test('Returns Platinum Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('platinum').then(data => {
      expect(data).toEqual([
        testSponsor.Facebook, 
        testSponsor.Google
      ]);
    });
  });

  test('Returns Gold Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('gold').then(data => {
      expect(data).toEqual([
        testSponsor.Microsoft
      ]);
    });
  });

  test('Returns Silver Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('silver').then(data => {
      expect(data).toEqual([
        testSponsor.Adobe
      ]);
    });
  });

  test('Returns Bronze Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('bronze').then(data => {
      expect(data).toEqual([
        testSponsor.Amazon
      ]);
    });
  });
});
