import template from './compareTable.html';
import controller from './compareTable.controller';
import './compareTable.scss';

let compareTableComponent = {
  bindings: {
    refData: '<',
    compData: '<',
    ecartData: '<',
    refColor: '<',
    refType: '<'
  },
  template,
  controller
};

export default compareTableComponent;
