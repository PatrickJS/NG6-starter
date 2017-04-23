import angular from 'angular';
import linkFunction from './{{ dashCase name }}.directive';

export default angular
  .module('{{ camelCase (pkg 'name') }}.{{ camelCase name }}', [])
  .directive('{{ camelCase name }}', () => {
    return {
      restrict: 'A',
      link: linkFunction
    };
  })
  .name;
