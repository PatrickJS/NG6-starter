import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component'; 

let aboutModule = angular.module('about', [
	uiRouter
])
.directive('about', aboutComponent);

export default aboutModule;