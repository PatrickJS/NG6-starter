import angular from 'angular';
import uiRouter from 'angular-ui-router';
import comparaisonsPageComponent from './comparaisonsPage.component';

let comparaisonsPageModule = angular.module('comparaisonsPage', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('comparaisons', {
        url: '/comparaisons',
        component: 'comparaisonsPage',
        resolve: {
          config: ($http) => {
            'ngInject';

            return $http.get("config/comparaisons.json").then(reply => reply.data);
          }
        }
      });
  })

  .component('comparaisonsPage', comparaisonsPageComponent)

  .name;

export default comparaisonsPageModule;
