let OpenWeatherFactory = function ($http, $q) {
  'ngInject';

  const apiKey = '651d7399f1db9446bc4a25062ab5a2a5';

  let getForeCast = (zipCode) => {
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    var deferred = $q.defer();

    var data = {
      zip: zipCode + ',us',
      APPID: apiKey,
      cnt: 5
    };

    httpGet(deferred, url, data);

    return deferred.promise;
  };

  function httpGet(deferred, url, data) {
    $http({
      method: 'GET',
      url: url,
      params: data
    })
    .success(function(data, status, headers, config) {
      deferred.resolve(data);
    })
    .error(function(data, status, headers, config) {
      deferred.reject(null);
    });
  }

  return { getForeCast };
};

export default OpenWeatherFactory;
