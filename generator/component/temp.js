import angular from 'angular';
import 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component.js';

let <%= name %>Module = angular.module('<%= name %>', [
	'ui.router'
])
.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;