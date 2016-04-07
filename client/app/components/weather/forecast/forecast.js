import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forecastComponent from './forecast.component';

let forecastModule = angular.module('forecast', [
  uiRouter
])

.component('forecast', forecastComponent);

export default forecastModule;
