import template from './agents.html';
import controller from './agents.controller';
import service from './agents.service';
import './agents.scss';

let agentsComponent = {
  bindings: {},
  template,
  controller,
  service
};

//inject dependencies
service.$inject = ['$http'];
controller.$inject = ['agentsService'];

export default agentsComponent;
