import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import AboutService from './about.service'

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

.service('AboutService', AboutService)
.component('about', aboutComponent);

export default aboutModule;
