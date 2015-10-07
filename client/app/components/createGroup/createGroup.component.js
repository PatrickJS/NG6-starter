import template from './createGroup.html';
import controller from './createGroup.controller';
import './createGroup.styl';

let createGroupComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default createGroupComponent;
