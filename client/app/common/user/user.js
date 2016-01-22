import angular from 'angular';
import userService from './user.service';

let userModule = angular.module('user', [])

.service('userService', userService);

export default userModule;
