import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

console.log('ngMaterial', ngMaterial);

angular.module('app', [
  uiRouter,
  ngMaterial,
  Common.name,
  Components.name
])

.component('app', AppComponent);
