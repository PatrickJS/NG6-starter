import angular from 'angular';
import EtlonnagePage from './etalonnage/etalonnagePage/etalonnagePage';


let componentModule = angular.module('app.components', [
  EtlonnagePage
])

  .name;

export default componentModule;
