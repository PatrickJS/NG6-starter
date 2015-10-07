import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Create from './createGroup/createGroup';


let componentModule = angular.module('app.components', [
  Home.name,
  About.name, 
  Create.name
]);

export default componentModule;
