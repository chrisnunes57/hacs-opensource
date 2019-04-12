// Export Announcement Queries to the rest of the application
module.exports = {
  create: require("./create"),
  getAll: require("./getAll"),
  getById: require("./getById"),
  getRecentByNumber: require("./getRecentByNumber"),
  removeById: require("./removeById"),
  updateById: require("./updateById")
};
