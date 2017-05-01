import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= camelCaseName %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default <%= camelCaseName %>Component;
