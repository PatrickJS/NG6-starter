import template from './weather.html';
import controller from './weather.controller';
import './weather.styl';

let weatherComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default weatherComponent;
