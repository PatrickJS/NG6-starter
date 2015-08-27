import template from './about.html';
import controller from './about.controller';
import './about.styl';

let aboutComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default aboutComponent;
