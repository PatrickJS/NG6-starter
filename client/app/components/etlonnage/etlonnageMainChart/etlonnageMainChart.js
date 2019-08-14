import angular from 'angular';
import uiRouter from 'angular-ui-router';
import etlonnageMainChartComponent from './etlonnageMainChart.component';

let etlonnageMainChartModule = angular.module('etlonnageMainChart', [
  uiRouter
])

.component('etlonnageMainChart', etlonnageMainChartComponent)

.name;

export default etlonnageMainChartModule;
