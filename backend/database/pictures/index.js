// Export Pictures Queries to the rest of the application
module.exports = {
  getAll: require("./getAll"),
  getPictureByAlbumId: require("./getPictureByAlbumId"),
  getRecentByNumber: require("./getRecentByNumber")
};
