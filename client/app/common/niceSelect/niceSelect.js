import angular from 'angular';
import uiRouter from 'angular-ui-router';
import niceSelectComponent from './niceSelect.component';

let niceSelectModule = angular.module('niceSelect', [
  uiRouter
])

.component('niceSelect', niceSelectComponent)

.name;

export default niceSelectModule;
