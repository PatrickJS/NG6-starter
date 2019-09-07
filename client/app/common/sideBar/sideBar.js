import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sideBarComponent from './sideBar.component';

let sideBarModule = angular.module('sideBar', [
  uiRouter
])

.component('sideBar', sideBarComponent)

.name;

export default sideBarModule;
