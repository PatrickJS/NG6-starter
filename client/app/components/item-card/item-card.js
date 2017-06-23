import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemCardComponent from './item-card.component';

let itemCardModule = angular.module('itemCard', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('item', {
        url: '/item',
        component: 'itemCard'
      });
  })

  .component('itemCard', itemCardComponent)

  .name;

export default itemCardModule;
