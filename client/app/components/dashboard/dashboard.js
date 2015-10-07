import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

let dashboardModule = angular.module('dashboard', [
  uiRouter
])

.directive('dashboard', dashboardComponent);

export default dashboardModule;
