const instance = require('./base');
const moment = require('moment');

module.exports = {
  prefix: 'user/-/activities/heart/',
  heartrate: function (options) {
    const resource = 'date/';
    const date = moment().subtract(1, 'days').format('YYYY-MM-DD');
    // const date = 'today';
    const period = {
      day: '1d',
      week: '7d',
      month: '30d',
    };
    instance
      .get(this.prefix + resource + date + '/' + period.day + '.json')
      .then((res) => {
        console.log(res.data);
      });
  },
};
