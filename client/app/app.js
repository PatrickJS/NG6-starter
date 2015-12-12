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
var container = document.getElementById('app-container');
var noAngularDOM;

angular.element(document).ready(() => {
	if(location.origin.match(/localhost/)) {
		System.trace = true;
		noAngularDOM = container.cloneNode(true);
		if ((!System.hotReloader)) {
			System.import('capaj/systemjs-hot-reloader').then(HotReloader => {
				System.hotReloader = new HotReloader.default('http://localhost:8081/');
				System.hotReloader.on('change', function (name) {
					console.log(name, 'changed')
				})
			})
		}
	}
	angular.bootstrap(container, [appModule.name]), {
		strictDi: true
	}
});

export default appModule;
export function __unload(){
	container = document.getElementById('app-container');
	container.remove();
	document.body.appendChild(noAngularDOM.cloneNode(true));
}
