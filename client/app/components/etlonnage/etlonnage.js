import angular from 'angular';
import uiRouter from 'angular-ui-router';
import etlonnageComponent from './etlonnage.component';

let etlonnageModule = angular.module('etlonnage', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('etlonnage', {
      url: '/',
      component: 'etlonnage'
    });
})

.component('etlonnage', etlonnageComponent)

.name;

export default etlonnageModule;
