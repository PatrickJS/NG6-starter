import angular from 'angular';
import uiRouter from 'angular-ui-router';
import selectCardComponent from './selectCard.component';

let selectCardModule = angular.module('selectCard', [
  uiRouter
])

.component('selectCard', selectCardComponent)

.name;

export default selectCardModule;
