import template from './streamBar.html';
import controller from './streamBar.controller';
import './streamBar.scss';

let streamBarComponent = {
  bindings: {
    streams: "<",
    selectedStream: '='
  },
  template,
  controller
};

export default streamBarComponent;
