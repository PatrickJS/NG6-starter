import angular from 'angular';
import 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
	'ui.router'
])
.config(($stateProvider, $urlRouterProvider)=>{
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		});
})
.directive('home', homeComponent);

export default homeModule;