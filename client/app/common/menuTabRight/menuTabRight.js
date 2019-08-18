import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuTabRightComponent from './menuTabRight.component';

let menuTabRightModule = angular.module('menuTabRight', [
  uiRouter
])

  .component('menuTabRight', menuTabRightComponent)

  .name;

export default menuTabRightModule;
