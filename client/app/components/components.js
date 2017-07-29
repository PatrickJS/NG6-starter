import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import ItemCard from './item-card/item-card';

let componentModule = angular.module('app.components', [
  Home,
  About,
  ItemCard
])

.name;

export default componentModule;
