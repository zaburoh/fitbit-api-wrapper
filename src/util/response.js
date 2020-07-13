const Response = {
  success: function (data) {
    console.log('[RequestURL]', data.config.baseURL + data.config.url);
    console.log(`[status]: ${data.status}`);
    console.log(`[txt]: ${data.statusText}`);
    console.log(data.data['activities-heart']);
    console.log(data.data['activities-heart-intraday']);
  },
  error: function (err) {
    console.log(
      '[RequestURL]',
      err.response.config.baseURL + err.response.config.url
    );
    console.log(
      '[fitbit-rate-limit-limit]',
      err.response.headers['fitbit-rate-limit-limit']
    );
    console.log(
      '[fitbit-rate-limit-remaining]',
      err.response.headers['fitbit-rate-limit-remaining']
    );
    console.log(
      '[fitbit-rate-limit-reset]',
      err.response.headers['fitbit-rate-limit-reset'] / 60
    );
    console.log('[status]', err.response.status);
    console.log('[statusText]', err.response.statusText);
    // console.log(err.response);
  },
};

module.exports = Response;
