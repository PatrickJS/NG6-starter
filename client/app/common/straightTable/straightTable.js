import angular from 'angular';
import uiRouter from 'angular-ui-router';
import straightTableComponent from './straightTable.component';

let straightTableModule = angular.module('straightTable', [
  uiRouter
])

.component('straightTable', straightTableComponent)

.name;

export default straightTableModule;
