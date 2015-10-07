import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import angularfire from 'angularfire';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  angularfire,
  Common.name,
  Components.name
])

.directive('app', AppComponent);
