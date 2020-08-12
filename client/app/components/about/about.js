import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import { AboutComponent } from './about.component';

export const AboutModule = angular
  .module('about', [UiRouter])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('about', {
      url: '/about',
      component: 'about'
    });
  })
  .component('about', AboutComponent).name;
