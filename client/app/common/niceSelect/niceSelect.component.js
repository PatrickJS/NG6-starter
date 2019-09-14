import template from './niceSelect.html';
import controller from './niceSelect.controller';
import './niceSelect.scss';

let niceSelectComponent = {
  bindings: {
    'model': '<',
    'optionList': '<',
    'onSelectChanged': '&'
  },
  template,
  controller
};

export default niceSelectComponent;
