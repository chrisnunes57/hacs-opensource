require("dotenv").config();
const { Sponsors } = require("../..");

/* Define Expected Data */
const testSponsor = require("../__test_data__");

/* Unit Tests */
describe(`Unit Test - Sponsors.getAll()`, () => {
  test("Method returns 5 Seeder Sponsors", () => {
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

describe("Unit Test - Announcements.getByPackageType( type ) with all types", () => {
  test("Returns Platinum Level Sponsors", () => {
    expect.assertions(1);
    return Sponsors.getByPackageType("platinum").then(data => {
      expect(data).toEqual([testSponsor.Facebook, testSponsor.Google]);
    });
  });

  test("Returns Gold Level Sponsors", () => {
    expect.assertions(1);
    return Sponsors.getByPackageType("gold").then(data => {
      expect(data).toEqual([testSponsor.Microsoft]);
    });
  });

  test("Returns Silver Level Sponsors", () => {
    expect.assertions(1);
    return Sponsors.getByPackageType("silver").then(data => {
      expect(data).toEqual([testSponsor.Adobe]);
    });
  });

  test("Returns Bronze Level Sponsors", () => {
    expect.assertions(1);
    return Sponsors.getByPackageType("bronze").then(data => {
      expect(data).toEqual([testSponsor.Amazon]);
    });
  });
});

/* Integration Tests */
describe("Integration Test - Sponsors.create, Sponsors.updateById, and Sponsors.removeById", () => {
  let sponsorId;

  test("Create a fake Sponsor", () => {
    expect.assertions(1);

    return Sponsors.create(
      testSponsor.Test.name,
      testSponsor.Test.package_type,
      testSponsor.Test.logo_link
    ).then(data => {
      sponsorId = data[0];

      // We don't care what the officerId is, just that we get one
      expect(sponsorId).toEqual(sponsorId);
    });
  });

  test("Confirm Sponsor creation and its values", () => {
    expect.assertions(4);

    return Sponsors.getById(sponsorId).then(data => {
      const sponsor = data[0];

      expect(sponsor.id).toEqual(sponsorId);
      expect(sponsor.name).toEqual(testSponsor.Test.name);
      expect(sponsor.package_type).toEqual(testSponsor.Test.package_type);
      expect(sponsor.logo_link).toEqual(testSponsor.Test.logo_link);
    });
  });

  test("Update fake Sponsor data", () => {
    expect.assertions(1);

    return Sponsors.updateById(
      sponsorId,
      "A Better Company",
      "platinum",
      "no_picture.png",
    ).then(data => {
      // NO data should be returned from update query, but a 1 signifies the row exists
      expect(data).toEqual([undefined, 1]);
    });
  });

  test("Confirm update of Sponsor values", () => {
    expect.assertions(4);

    return Sponsors.getById(sponsorId).then(data => {
      const sponsor = data[0];

      expect(sponsor.id).toEqual(sponsorId);
      expect(sponsor.name).toEqual("A Better Company");
      expect(sponsor.package_type).toEqual("platinum");
      expect(sponsor.logo_link).toEqual("no_picture.png");
    });
  });

  test("Remove the fake Sponsor", () => {
    expect.assertions(1);

    return Sponsors.removeById(sponsorId).then(data => {
      // No data should be returned if successful removal
      expect(data).toEqual(undefined);
    });
  });

  test("Confirm remove of fake Sponsor", () => {
    expect.assertions(1);

    return Sponsors.getById(sponsorId).then(data => {
      // data should be an empty array, since no JSON Object of the
      // announcement can be found or returned
      expect(data).toEqual([]);
    });
  });
});
