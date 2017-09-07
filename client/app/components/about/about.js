import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about'
      });
  })

  .component('about', aboutComponent)

  .name;

export default aboutModule;
