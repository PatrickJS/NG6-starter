import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import { HomeComponent } from './home.component';

export const HomeModule = angular
  .module('home', [UiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      component: 'home'
    });
  })
  .component('home', HomeComponent).name;
