const instance = require('./base');
const moment = require('moment');

module.exports = {
  prefix: 'user/-/activities/heart/',
  period: {
    day: '1d',
    week: '7d',
    month: '30d',
  },

  heartrate: function (dateTime) {
    const resource = 'date/';
    const date = dateTime || moment().subtract(1, 'days').format('YYYY-MM-DD');
    return instance.get(
      this.prefix + resource + date + '/' + this.period.day + '.json'
    );
  },
};
