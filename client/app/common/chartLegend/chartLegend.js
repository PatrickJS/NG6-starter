import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chartLegendComponent from './chartLegend.component';

let chartLegendModule = angular.module('chartLegend', [
  uiRouter
])

.component('chartLegend', chartLegendComponent)

.name;

export default chartLegendModule;
