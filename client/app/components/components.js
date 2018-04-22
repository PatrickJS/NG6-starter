import angular from 'angular';
import Display from './display/display';
import CalculatorKeys from './calculatorKeys/calculatorKeys';

let componentModule = angular.module('app.components', [
  Display,
  CalculatorKeys
])
.name;

export default componentModule;
