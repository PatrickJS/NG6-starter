import template from './menuTabRight.html';
import controller from './menuTabRight.controller';
import './menuTabRight.scss';

let menuTabRightComponent = {
  bindings: {
    measureList: '<',
    stackList: '<',
    dimensionList: '<',
    stream: '<',
    onDimensionChanged: '&',
    onMeasureChanged: '&',
    onStackChanged: '&',
    refType: '=',
    costType: '='
  },
  template,
  controller
};

export default menuTabRightComponent;
