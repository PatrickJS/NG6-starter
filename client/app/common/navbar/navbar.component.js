import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default navbarComponent;
