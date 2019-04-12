require("dotenv").config();
const { Announcements } = require("../..");

/* Define Expected Data */
const testAnnouncement = require("../__test_data__");

/* Unit Tests */
describe(`Unit Test - Announcement.getAll()`, () => {
  test("Method returns 5 Seeder Announcements", () => {
    expect.assertions(1);
    return Announcements.getAll().then(data => {
      expect(data).toEqual([
        testAnnouncement.One,
        testAnnouncement.Two,
        testAnnouncement.Three,
        testAnnouncement.Four,
        testAnnouncement.Five
      ]);
    });
  });
});

describe("Unit Test - Announcements.getById( id ) with 2 different ids", () => {
  test("Returns announcement with id = 1", () => {
    expect.assertions(1);
    return Announcements.getById(1).then(data => {
      expect(data).toEqual([testAnnouncement.One]);
    });
  });

  test("Returns announcement with id = 5", () => {
    expect.assertions(1);
    return Announcements.getById(5).then(data => {
      expect(data).toEqual([testAnnouncement.Five]);
    });
  });
});

describe("Unit Test - Announcements.getRecentByNumber( number )", () => {
  test("Returns most recent Announcement", () => {
    expect.assertions(1);
    return Announcements.getRecentByNumber(1).then(data => {
      expect(data).toEqual([testAnnouncement.Five]);
    });
  });

  test("Returns 3 most recent announcements", () => {
    expect.assertions(1);
    return Announcements.getRecentByNumber(3).then(data => {
      expect(data).toEqual([
        testAnnouncement.Five,
        testAnnouncement.Four,
        testAnnouncement.Three
      ]);
    });
  });
});

/* Integration Tests */
describe("Integration Test - Announcements.create and Announcements.remove", () => {
  let announcementId;

  test("Create a fake Announcement", () => {
    expect.assertions(1);
    return Announcements.create(
      testAnnouncement.Six.title,
      testAnnouncement.Six.content
    ).then(data => {
      announcementId = data[0];

      // We don't care what the announcementId is, just that we get one
      expect(announcementId).toEqual(announcementId);
    });
  });

  test("Get newly created Announcement and test its values", () => {
    expect.assertions(3);
    return Announcements.getById(announcementId).then(data => {
      // data is an array that holds a single JSON object
      const announcement = data[0];

      expect(announcement.id).toEqual(announcementId);
      expect(announcement.title).toEqual(testAnnouncement.Six.title);
      expect(announcement.content).toEqual(testAnnouncement.Six.content);
    });
  });

  test("Remove the fake Announcement", () => {
    expect.assertions(1);

    return Announcements.removeById(announcementId).then(data => {
      // No data should be returned if successful removal
      expect(data).toEqual(undefined);
    });
  });

  test("Confirm removal of fake Announcement", () => {
    expect.assertions(1);
    return Announcements.getById(announcementId).then(data => {
      // data should be an empty array, since no JSON Object of the
      // announcement can be found or returned
      expect(data).toEqual([]);
    });
  });
});
