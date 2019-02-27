require('dotenv').config();
const { Officers } = require('../..');

/* Define Expected Data */
// Pull the Date that you Seeded your DB with
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
const officer1 = {
  "name": 'Theodor Van de Vlies',
  "grade_level": 'Senior',
  "description": 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  "email": 'tvan0@nature.com',
  "phone_number": '909-755-7353',
  "photo_link": 'https://robohash.org/exatquenihil.bmp?size=50x50&set=set1',
  "createdAt": seedDate
};

const officer2 = {
  "name": 'Carmelina Parradye',
  "grade_level": 'Junior',
  "description": 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
  "email": 'cparradye1@ft.com',
  "phone_number": '586-135-3044',
  "photo_link": 'https://robohash.org/omnisquisdebitis.png?size=50x50&set=set1',
  "createdAt": seedDate
};

const officer3 = {
  "name": 'Garold Goodsell',
  "grade_level": 'Sophomore',
  "description": 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
  "email": 'ggoodsell2@joomla.org',
  "phone_number": '233-838-3908',
  "photo_link": 'https://robohash.org/liberovoluptasbeatae.bmp?size=50x50&set=set1',
  "createdAt": seedDate
};

const officer4 = {
  "name": 'Felice Hincks',
  "grade_level": 'Senior',
  "description": 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
  "email": 'fhincks3@springer.com',
  "phone_number": '767-584-5405',
  "photo_link": 'https://robohash.org/quisquamducimusdolorem.jpg?size=50x50&set=set1',
  "createdAt": seedDate
};

const officer5 = {
  "name": 'Stacia Oldrey',
  "grade_level": 'Junior',
  "description": 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  "email": 'soldrey4@hugedomains.com',
  "phone_number": '857-315-2635',
  "photo_link": 'https://robohash.org/molestiaefuganemo.bmp?size=50x50&set=set1',
  "createdAt": seedDate
};


/* Unit Tests */
describe(`Test Officers.getAll()`, () => {
  const seederOfficers = [
    officer1, officer2, officer3, officer4, officer5
  ];
  test('Method returns 5 Seeder Officers', () => {
    expect.assertions(1);
    return Officers.getAll().then(data => {
      expect(data).toEqual(seederOfficers);
    });
  });
});