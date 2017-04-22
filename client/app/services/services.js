import angular from 'angular';
import Item from './item/item';

let serviceModule = angular.module('app.services', [
  Item
])

.name;

export default serviceModule;
