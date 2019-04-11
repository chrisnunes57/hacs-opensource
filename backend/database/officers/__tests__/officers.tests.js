require("dotenv").config();
const { Officers } = require("../..");

/* Define Expected Data */
const testOfficer = require("../__test_data__");

/* Unit Tests */
describe(`Unit Test - Officers.getAll()`, () => {
  test("Method returns 5 Seeder Officers", () => {
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

/* Integration Tests */
describe("Integration Test - Officers.create, Officers.updateById, and Officers.removeById", () => {
  let officerId;

  test("Create a fake Officer", () => {
    expect.assertions(1);

    return Officers.create(
      testOfficer.Jeffrey.name,
      testOfficer.Jeffrey.grade_level,
      testOfficer.Jeffrey.description,
      testOfficer.Jeffrey.email,
      testOfficer.Jeffrey.phone_number,
      testOfficer.Jeffrey.photo_link
    ).then(data => {
      officerId = data[0];

      // We don't care what the officerId is, just that we get one
      expect(officerId).toEqual(officerId);
    });
  });

  test("Confirm Officer creation and its values", () => {
    expect.assertions(7);

    return Officers.getById(officerId).then(data => {
      const officer = data[0];

      expect(officer.id).toEqual(officerId);
      expect(officer.name).toEqual(testOfficer.Jeffrey.name);
      expect(officer.grade_level).toEqual(testOfficer.Jeffrey.grade_level);
      expect(officer.description).toEqual(testOfficer.Jeffrey.description);
      expect(officer.email).toEqual(testOfficer.Jeffrey.email);
      expect(officer.phone_number).toEqual(testOfficer.Jeffrey.phone_number);
      expect(officer.photo_link).toEqual(testOfficer.Jeffrey.photo_link);
    });
  });

  test("Update fake Officer data", () => {
    expect.assertions(1);

    return Officers.updateById(
      officerId,
      "John Doe",
      "Freshman",
      "I am John Doe, I am a fake Officer",
      "john@doe.com",
      "555-555-5555",
      "nophoto.png"
    ).then(data => {
      // NO data should be returned from update query, but a 1 signifies the row exists
      expect(data).toEqual([undefined, 1]);
    });
  });

  test("Confirm update of Officer values", () => {
    expect.assertions(7);

    return Officers.getById(officerId).then(data => {
      const officer = data[0];

      expect(officer.id).toEqual(officerId);
      expect(officer.name).toEqual("John Doe");
      expect(officer.grade_level).toEqual("Freshman");
      expect(officer.description).toEqual("I am John Doe, I am a fake Officer");
      expect(officer.email).toEqual("john@doe.com");
      expect(officer.phone_number).toEqual("555-555-5555");
      expect(officer.photo_link).toEqual("nophoto.png");
    });
  });

  test("Remove the fake Officer", () => {
    expect.assertions(1);

    return Officers.removeById(officerId).then(data => {
      // No data should be returned if successful removal
      expect(data).toEqual(undefined);
    });
  });

  test("Confirm remove of fake Officer", () => {
    expect.assertions(1);

    return Officers.getById(officerId).then(data => {
      // data should be an empty array, since no JSON Object of the
      // announcement can be found or returned
      expect(data).toEqual([]);
    });
  });
});
