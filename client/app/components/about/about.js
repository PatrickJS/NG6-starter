import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
})

.directive('about', aboutComponent);

export default aboutModule;
