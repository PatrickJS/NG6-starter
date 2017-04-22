import angular from 'angular';
import service from './{{ dashCase name }}.service';

export default angular
  .module('{{ camelCase (pkg 'name') }}.{{ camelCase name }}', [])
  .service('{{ properCase name }}Service', service)
  .name;
