import template from './videoplayer.html';
import controller from './videoplayer.controller';
import './videoplayer.scss';

let videoplayerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default videoplayerComponent;
