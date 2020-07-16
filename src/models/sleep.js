const BaseModel = require('./base');
const instance = new BaseModel(1.2).instance;

const Sleep = {
  prefix: 'user/-/sleep/',
  resource: 'date/',

  date: function (date = this.baseDate) {
    return instance.get(this.prefix + this.resource + date + '.json');
  },

  range: function (startDate, endDate) {
    return instance.get(
      this.prefix + this.resource + startDate + '/' + endDate + '.json'
    );
  },
};

module.exports = Sleep;
