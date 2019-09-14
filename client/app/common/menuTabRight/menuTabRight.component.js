import template from './menuTabRight.html';
import controller from './menuTabRight.controller';
import './menuTabRight.scss';

let menuTabRightComponent = {
  bindings: {
    measure: '=',
    dimension: '=',
    stack: '=',
    qlikConfig: '<',
    showCompare: '@',
    streams: '<',
    onMeasureChanged: '&',
    onDimensionChanged: '&',
    onStackChanged: '&',
    onRefTypeChanged: '&',
    onCostTypeChanged: '&'
  },
  template,
  controller
};

export default menuTabRightComponent;
