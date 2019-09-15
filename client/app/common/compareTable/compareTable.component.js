import template from './compareTable.html';
import controller from './compareTable.controller';
import './compareTable.scss';

let compareTableComponent = {
  bindings: {
    data: '<',
    refColor: '<',
    refType: '<'
  },
  template,
  controller
};

export default compareTableComponent;
