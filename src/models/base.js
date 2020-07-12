const config = require('../config');
const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.fitbit.com/1/',
  timeout: 15000,
  headers: {
    Authorization: 'Bearer ' + config.FITBIT_BEARER_TOKEN,
  },
});
