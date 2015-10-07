import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Groups from './groups/groups';


let commonModule = angular.module('app.common', [
  Navbar.name,
  User.name, 
  Groups.name
]);

export default commonModule;
