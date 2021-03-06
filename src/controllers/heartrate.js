const HeartRate = require('../models/heartrate');
const Responase = require('../util/response');

module.exports = {
  getDate: async function (dateTime, callback) {
    try {
      let data = await HeartRate.date(dateTime);
      // Responase.success(data);
      return callback(null, data);
    } catch (err) {
      // Responase.error(err);
      return callback(err);
    }
  },
  getRange: async function (startDate, endDate, callback) {
    try {
      let data = await HeartRate.range(startDate, endDate);
      // Responase.success(data);
      return callback(null, data);
    } catch (err) {
      // Responase.error(err);
      return callback(err);
    }
  },
};
