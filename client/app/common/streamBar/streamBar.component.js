import template from './streamBar.html';
import controller from './streamBar.controller';
import './streamBar.scss';

let streamBarComponent = {
  bindings: {
    streams: "<",
    onStreamChanged: '&',
    qlikField: "<"
  },
  template,
  controller
};

export default streamBarComponent;
