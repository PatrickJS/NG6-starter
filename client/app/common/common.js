import angular from 'angular';
import directives from './directives/directives';
import filters from './filters/filters';

import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  directives,
  filters,
  Navbar,
  Hero,
  User,
])

.name;

export default commonModule;
