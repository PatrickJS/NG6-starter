import template from './forecast.html';
import controller from './forecast.controller';
import './forecast.styl';

let forecastComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'fc'
};

export default forecastComponent;
