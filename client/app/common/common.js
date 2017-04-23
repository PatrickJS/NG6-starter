import angular from 'angular';
import filters from './filters/filters';

import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  filters,
  Navbar,
  Hero,
  User,
])

.name;

export default commonModule;
