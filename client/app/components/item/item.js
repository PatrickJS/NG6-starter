import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './item.component';

export default angular
  .module('item', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('item', {
      url: '/item',
      component: 'item'
    });
  })
  .component('item', component)
  .name;
