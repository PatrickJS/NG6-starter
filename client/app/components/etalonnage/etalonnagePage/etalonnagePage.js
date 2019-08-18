import angular from 'angular';
import uiRouter from 'angular-ui-router';
import etalonnagePageComponent from './etalonnagePage.component';

let etalonnagePageModule = angular.module('etlonnage', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('etalonnage', {
        url: '/',
        component: 'etalonnagePage'
      });
  })

  .component('etalonnagePage', etalonnagePageComponent)

  .name;

export default etalonnagePageModule;
