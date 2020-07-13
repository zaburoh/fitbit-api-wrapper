const instance = require('./base');

const HeartRate = {
  prefix: 'user/-/activities/heart/',
  baseDate: 'today',
  period: {
    DAY: '1d',
    SEVEN_DAY: '7d',
    THIRTY_DAY: '30d',
    WEEK: '1w',
    MONTH: '1m',
  },

  date: function (date = this.baseDate, period = this.period.DAY) {
    const resource = 'date/';
    return instance.get(this.prefix + resource + date + '/' + period + '.json');
  },

  range: function (startDate, endDate) {
    const resource = 'date/';
    return instance.get(
      this.prefix + resource + startDate + '/' + endDate + '.json'
    );
  },
};

module.exports = HeartRate;
