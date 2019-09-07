import angular from 'angular';
import qlikService from './qlikService';
import loadService from './loadService';
import utilService from './utilService';

export default angular
  .module('app.services', [])
  .service({
    qlikService,
    loadService,
    utilService
  }).name;
