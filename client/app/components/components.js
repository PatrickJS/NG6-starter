import angular from 'angular';
import EtlonnagePage from './etalonnagePage/etalonnagePage';
import ComparaisonPage from './comparaisonsPage/comparaisonsPage';

let componentModule = angular.module('app.components', [
  EtlonnagePage,
  ComparaisonPage
])

  .name;

export default componentModule;
