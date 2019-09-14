import angular from 'angular';
import qlikService from './qlikService';
import loadService from './loadService';
import utilService from './utilService';
import stateService from './stateService';

export default angular
  .module('app.services', [])
  .service({
    qlikService,
    loadService,
    utilService,
    stateService
  }).name;
