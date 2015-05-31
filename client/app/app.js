import angular from 'angular';
import 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

let appModule = angular.module('app', [
	'ui.router',
	Common.name,
	Components.name
])
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name])
});

export default appModule;
