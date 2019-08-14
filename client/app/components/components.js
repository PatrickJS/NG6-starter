import angular from 'angular';
import EtlonnagePage from './etlonnage/etlonnagePage/etlonnagePage';
import etlonnageMainChart from './etlonnage/etlonnageMainChart/etlonnageMainChart';
import etlonnageSubChart from './etlonnage/etlonnageSubChart/etlonnageSubChart';

let componentModule = angular.module('app.components', [
  EtlonnagePage,
  etlonnageMainChart,
  etlonnageSubChart
])

.name;

export default componentModule;
