import template from './dashboard.html';
import controller from './dashboard.controller';
import './dashboard.styl';

let dashboardComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default dashboardComponent;
