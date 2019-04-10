// Export Pictures Queries to the rest of the application
module.exports = {
  create: require('./create'),
  getAll: require('./getAll'),
  getById: require('./getById'),
  removeById: require('./removeById'),
  updateById: require('./updateById')
};