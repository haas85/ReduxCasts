var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube key expected key, received undefined');
  }

  if (!options.video) {
    throw new Error('Youtube Video expected key, received undefined');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    videoId: options.video
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
