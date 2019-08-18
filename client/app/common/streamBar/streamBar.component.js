import template from './streamBar.html';
import controller from './streamBar.controller';
import './streamBar.scss';

let streamBarComponent = {
  bindings: {
    streams: "<",
    onStreamChanged: '&'
  },
  template,
  controller
};

export default streamBarComponent;
