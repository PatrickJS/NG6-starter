import angular from 'angular';
import uiRouter from 'angular-ui-router';
import compareTableComponent from './compareTable.component';

let compareTableModule = angular.module('compareTable', [
  uiRouter
])

.component('compareTable', compareTableComponent)

.name;

export default compareTableModule;
