const Sleep = require('../models/sleep');
const Response = require('../util/response');

module.exports = {
  getDate: async function (dateTime, callback) {
    try {
      let data = await Sleep.date(dateTime);
      // Response.success(data);
      return callback(null, data);
    } catch (err) {
      // Response.error(err);
      return callback(err);
    }
  },
  getRange: async function (startDate, endDate, callback) {
    try {
      let data = await Sleep.range(startDate, endDate);
      // Response.success(data);
      return callback(null, data);
    } catch (err) {
      // Response.error(err);
      return callback(err);
    }
  },
};
