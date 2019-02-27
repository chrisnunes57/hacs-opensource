'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds five fake pictures
    return queryInterface.bulkInsert('pictures', [{
      image_link: 'https://robohash.org/ipsamdebitiscommodi.jpg?size=200x200&set=set1',
      album_id: 1
    }, {
      image_link: 'https://robohash.org/ipsumfacereaccusamus.jpg?size=200x200&set=set1',
      album_id: 2
    }, {
      image_link: 'https://robohash.org/nostrumminimadolorem.png?size=200x200&set=set1',
      album_id: 3
    }, {
      image_link: 'https://robohash.org/exercitationemautvoluptate.jpg?size=200x200&set=set1',
      album_id: 4
    }, {
      image_link: 'https://robohash.org/voluptatemporrofugit.jpg?size=200x200&set=set1',
      album_id: 5
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('pictures', null, {});
  }
};
