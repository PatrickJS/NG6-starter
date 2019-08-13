import angular from 'angular';
// import Home from './home/home';
import About from './about/about';
import Etlonnage from './etlonnage/etlonnage';

let componentModule = angular.module('app.components', [
  Etlonnage,
  About
])

.name;

export default componentModule;
