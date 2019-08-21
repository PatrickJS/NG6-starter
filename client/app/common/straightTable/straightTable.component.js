import template from './straightTable.html';
import controller from './straightTable.controller';
import './straightTable.scss';

let straightTableComponent = {
  bindings: {
    headers: '<',
    data: '<'
  },
  template,
  controller
};

export default straightTableComponent;
