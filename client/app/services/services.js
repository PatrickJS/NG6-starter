import angular from 'angular';
import calculator from './calculator';

let services = angular.module('app.services', [])
.service({
  calculator
})
.name;

export default services;