import template from './etalonnagePage.html';
import controller from './etalonnagePage.controller';
import './etalonnagePage.scss';

let EtalonnagePageComponent = {
  bindings: {
    config: '<'
  },
  template,
  controller
};

export default EtalonnagePageComponent;
