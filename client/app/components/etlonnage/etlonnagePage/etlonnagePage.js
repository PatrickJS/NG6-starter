import angular from 'angular';
import uiRouter from 'angular-ui-router';
import etlonnagePageComponent from './etlonnagePage.component';

let etlonnagePageModule = angular.module('etlonnage', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('etlonnage', {
      url: '/',
      component: 'etlonnagePage'
    });
})

.component('etlonnagePage', etlonnagePageComponent)

.name;

export default etlonnagePageModule;
