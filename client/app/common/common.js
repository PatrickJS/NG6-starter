import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import StreamBar from './streamBar/streamBar';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  StreamBar
])
  
.name;

export default commonModule;
