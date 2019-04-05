require('dotenv').config();

module.exports = {
  One: {
    "id": 1,
    "name": 'Album #1',
    "description": 'Album #1 Description',
    "album_size": 1,
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_ONE))
  },
  Two: {
    "id": 2,
    "name": 'Album #2',
    "description": 'Album #2 Description',
    "album_size": 1,
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_TWO))
  },
  Three: {
    "id": 3,
    "name": 'Album #3',
    "description": 'Album #3 Description',
    "album_size": 1,
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_THREE))
  },
  Four: {
    "id": 4,
    "name": 'Album #4',
    "description": 'Album #4 Description',
    "album_size": 1,
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_FOUR))
  },
  Five: {
    "id": 5,
    "name": 'Album #5',
    "description": 'Album #5 Description',
    "album_size": 1,
    "createdAt": new Date(Date.parse(process.env.SEED_DATE_FIVE))
  }
};