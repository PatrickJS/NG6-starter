class ForecastController {
  constructor($scope, OpenWeather) {
    'ngInject';
    var vm = this;
    vm.name = 'forecast';

    $scope.$on('refreshForecast', function(zipCode) {
      OpenWeather.getForeCast(zipCode).then(function (forecast) {
        vm.forecast = forecast;
      });
    });
  }
}

export default ForecastController;
