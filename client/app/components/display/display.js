import angular from 'angular';
import uiRouter from 'angular-ui-router';
import displayComponent from './display.component';

let displayModule = angular.module('display', [
  uiRouter
])

.component('display', displayComponent)

.name;

export default displayModule;
