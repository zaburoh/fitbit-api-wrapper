const instance = require('./base');

module.exports = {
  prefix: 'user/-/',
  profile: function () {
    instance.get(this.prefix + 'profile.json').then((res) => {
      console.log(res.data);
    });
  },
};
