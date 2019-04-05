// Export Album Queries to the rest of the application
module.exports = {
  getAll: require('./getAll'),
  getById: require('./getById'),
  getRecentByNumber: require('./getRecentByNumber')
};