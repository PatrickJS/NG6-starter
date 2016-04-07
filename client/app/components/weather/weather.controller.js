class WeatherController {
  constructor($scope) {
    'ngInject';

    var vm = this;
    vm.name = 'weather';    
    vm.zipCode = '';

    $scope.$watch(function watchZipCode(){
      return vm.zipCode;
    }, function onWatchZipCode(zipCode){
      if(zipCode.length !== 5) {
        vm.forecast = [];

        return;
      }
      $scope.$broadcast('refreshForecast', zipCode);      
    });
  }
}

export default WeatherController;
