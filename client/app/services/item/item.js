import angular from 'angular';
import service from './item.service';

export default angular
  .module('services.item', [])
  .service('ItemService', service)
  .name;
