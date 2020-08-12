import angular from 'angular';
import { UserFactory } from './user.factory';

export const UserModule = angular.module('user', []).factory('User', UserFactory).name;
