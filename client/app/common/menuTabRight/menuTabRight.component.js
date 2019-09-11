import template from './menuTabRight.html';
import controller from './menuTabRight.controller';
import './menuTabRight.scss';

let menuTabRightComponent = {
  bindings: {
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
