import angular from 'angular';
import uiRouter from 'angular-ui-router';
import calculatorKeysComponent from './calculatorKeys.component';

let calculatorKeysModule = angular.module('calculatorKeys', [
  uiRouter
])

.component('calculatorKeys', calculatorKeysComponent)

.name;

export default calculatorKeysModule;
