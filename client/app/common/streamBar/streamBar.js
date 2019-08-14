import angular from 'angular';
import uiRouter from 'angular-ui-router';
import streamBarComponent from './streamBar.component';

let streamBarModule = angular.module('streamBar', [
  uiRouter
])

.component('streamBar', streamBarComponent)

.name;

export default streamBarModule;
