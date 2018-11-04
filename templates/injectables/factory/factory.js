import angular from 'angular';
import factory from './{{ dashCase name }}.factory';

export default angular
  .module('{{ camelCase (pkg 'name') }}.{{ camelCase name }}', [])
  .factory('{{ properCase name }}factory', factory)
  .name;
