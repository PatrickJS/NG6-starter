import angular from 'angular';
import GroupsFactory from './groups.factory';


let groupsModule = angular.module('groups', [])
	.factory('Groups', GroupsFactory);
	
export default groupsModule; 