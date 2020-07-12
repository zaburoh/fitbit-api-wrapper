const model = require('../models/heartrate');

module.exports = {
  get: async function (dateTime) {
    try {
      let data = await model.heartrate(dateTime);
      console.log(`[status]: ${data.status}`);
      console.log(`[txt]: ${data.statusText}`);
      console.log(data.data['activities-heart']);
      console.log(data.data['activities-heart-intraday']);
    } catch (err) {
      console.log(err.response);
    }
  },
};
