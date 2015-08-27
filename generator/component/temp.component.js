import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

let <%= name %>Component = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default <%= name %>Component;
