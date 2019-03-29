require('dotenv').config();
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
module.exports = {
  One: {
    "id": 1,
    "image_link": 'https://robohash.org/ipsamdebitiscommodi.jpg?size=200x200&set=set1',
    "album_id": 1,
    "createdAt": seedDate
  }, 
  Two: {
    "id": 2,
    "image_link": 'https://robohash.org/ipsumfacereaccusamus.jpg?size=200x200&set=set1',
    "album_id": 2,
    "createdAt": seedDate
  }, 
  Three: {
    "id": 3,
    "image_link": 'https://robohash.org/nostrumminimadolorem.png?size=200x200&set=set1',
    "album_id": 3,
    "createdAt": seedDate
  }, 
  Four: {
    "id": 4,
    "image_link": 'https://robohash.org/exercitationemautvoluptate.jpg?size=200x200&set=set1',
    "album_id": 4,
    "createdAt": seedDate
  }, 
  Five: {
    "id": 5,
    "image_link": 'https://robohash.org/voluptatemporrofugit.jpg?size=200x200&set=set1',
    "album_id": 5,
    "createdAt": seedDate
  }
};
