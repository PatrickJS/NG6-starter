import template from './app.html';
import './app.styl';

let appComponent = () => {
  return {
    template,
    restrict: 'E'
  };
};

export default appComponent;
