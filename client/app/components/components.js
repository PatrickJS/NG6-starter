import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Weather from './weather/weather';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Weather.name
]);

export default componentModule;
