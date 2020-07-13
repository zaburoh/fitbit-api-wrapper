const HeartRate = require('../models/heartrate');
const Responase = require('../util/response');

module.exports = {
  getDate: async function (dateTime) {
    try {
      let data = await HeartRate.date(dateTime);
      Responase.success(data);
    } catch (err) {
      Responase.error(err);
    }
  },
  getRange: async function (startDate, endDate) {
    try {
      let data = await HeartRate.range(startDate, endDate);
      Responase.success(data);
    } catch (err) {
      Responase.error(err);
    }
  },
};
