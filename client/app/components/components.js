import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Contact
]).name;

export default componentModule;
