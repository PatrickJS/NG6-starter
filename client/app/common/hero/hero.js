import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
  uiRouter
])

.component('hero', heroComponent)
  
.name;

export default heroModule;
