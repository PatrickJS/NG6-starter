import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import aboutService from './about.service'

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
})

.service('aboutService', aboutService)
.component('about', aboutComponent);

export default aboutModule;
