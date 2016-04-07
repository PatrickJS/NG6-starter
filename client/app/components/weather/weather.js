import angular from 'angular';
import uiRouter from 'angular-ui-router';
import weatherComponent from './weather.component';
import forecastComponent from './forecast/forecast.component';

let weatherModule = angular.module('weather', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('weather', {
      url: '/',
      views: {
        'content': {
          template: '<weather/>'
        },
        'forecast@weather': {
          template: '<forecast/>'
        }
      }
    });
})

.component('weather', weatherComponent)
.component('forecast', forecastComponent);

export default weatherModule;
