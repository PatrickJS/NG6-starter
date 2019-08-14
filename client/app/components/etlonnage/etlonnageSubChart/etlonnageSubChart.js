import angular from 'angular';
import uiRouter from 'angular-ui-router';
import etlonnageSubChartComponent from './etlonnageSubChart.component';

let etlonnageSubChartModule = angular.module('etlonnageSubChart', [
  uiRouter
])

.component('etlonnageSubChart', etlonnageSubChartComponent)

.name;

export default etlonnageSubChartModule;
