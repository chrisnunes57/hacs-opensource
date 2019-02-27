require('dotenv').config();
const { Sponsors } = require('../..');

/* Define Expected Data */
// Pull the Date that you Seeded your DB with
const seedDate = new Date(Date.parse(process.env.SEED_DATE));

const sponsor1 = {
  "id": 1,
  "name": "Facebook",
  "package_type": "platinum",
  "logo_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/200px-F_icon.svg.png",
  "createdAt": seedDate
};
const sponsor2 = {
  "id": 2,
  "name": "Microsoft",
  "package_type": "gold",
  "logo_link": "https://i.pinimg.com/236x/e7/d7/c3/e7d7c3b9083afa752a4e9ce33f0025c4--popular-logos-famous-logos.jpg",
  "createdAt": seedDate
};
const sponsor3 = {
  "id": 3,
  "name": "Adobe",
  "package_type": "silver",
  "logo_link": "https://www.liverpool.ac.uk/media/livacuk/computingservices/software/adobe.png",
  "createdAt": seedDate
};
const sponsor4 = {
  "id": 4,
  "name": "Amazon",
  "package_type": "bronze",
  "logo_link": "https://media.licdn.com/dms/image/C4D0BAQHi-82ItMq_9g/company-logo_200_200/0?e=2159024400&v=beta&t=DBTnfI7EXCCPkUcWFKVvMINmnT33_xpVyXw_Zke_37I",
  "createdAt": seedDate
};
const sponsor5 = {
  "id": 5,
  "name": "Google",
  "package_type": "platinum",
  "logo_link": "https://valleyspadoctor.com/wp-content/uploads/2016/08/Google-Logo-200x200.jpg",
  "createdAt": seedDate
};

/* Unit Tests */
describe(`Test Sponsors.getAll()`, () => {
  const seederSponsors = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5
  ];
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
      expect(data).toEqual([sponsor1, sponsor5]);
    });
  });

  test('Returns Gold Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('gold').then(data => {
      expect(data).toEqual([sponsor2]);
    });
  });

  test('Returns Silver Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('silver').then(data => {
      expect(data).toEqual([sponsor3]);
    });
  });

  test('Returns Bronze Level Sponsors', () => {
    expect.assertions(1);
    return Sponsors.getByPackageType('bronze').then(data => {
      expect(data).toEqual([sponsor4]);
    });
  });
});
