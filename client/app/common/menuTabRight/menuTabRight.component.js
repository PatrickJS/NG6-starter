import template from './menuTabRight.html';
import controller from './menuTabRight.controller';
import './menuTabRight.scss';

let menuTabRightComponent = {
  bindings: {
    tileList: '<',
    filterList: '<',
    stream: '<',
    dimension: '=',
    measure: '=',
    group: '=',
    refType: '=',
    costType: '='
  },
  template,
  controller
};

export default menuTabRightComponent;
