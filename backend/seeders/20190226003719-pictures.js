'use strict';
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake pictures
    return queryInterface.bulkInsert('pictures', [{
      image_link: 'https://robohash.org/ipsamdebitiscommodi.jpg?size=200x200&set=set1',
      album_id: 1,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_ONE))
    }, {
      image_link: 'https://robohash.org/ipsumfacereaccusamus.jpg?size=200x200&set=set1',
      album_id: 2,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_TWO))
    }, {
      image_link: 'https://robohash.org/nostrumminimadolorem.png?size=200x200&set=set1',
      album_id: 3,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_THREE))
    }, {
      image_link: 'https://robohash.org/exercitationemautvoluptate.jpg?size=200x200&set=set1',
      album_id: 4,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FOUR))
    }, {
      image_link: 'https://robohash.org/voluptatemporrofugit.jpg?size=200x200&set=set1',
      album_id: 5,
      createdAt: new Date(Date.parse(process.env.SEED_DATE_FIVE))
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('pictures', null, {});
  }
};
