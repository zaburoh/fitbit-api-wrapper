const config = require('../config');
const axios = require('axios');

class BaseModel {
  constructor(version = 1, token) {
    this.regex = /VERSION/;
    this.token = token || config.FITBIT_BEARER_TOKEN;
    this.instance = axios.create({
      baseURL: 'https://api.fitbit.com/VERSION/'.replace(this.regex, version),
      timeout: 15000,
      headers: {
        'Aceept-Locale': 'ja_JP',
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}

module.exports = BaseModel;
