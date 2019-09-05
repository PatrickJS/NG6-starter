import template from './menuTabRight.html';
import controller from './menuTabRight.controller';
import './menuTabRight.scss';

let menuTabRightComponent = {
  bindings: {
    qlikConfig: '<',
    measureList: '<',
    stackList: '<',
    dimensionList: '<',
    refTypeList: '<',
    costTypeList: '<',
    streams: '<',
    onDimensionChanged: '&',
    onMeasureChanged: '&',
    onStackChanged: '&',
    onRefTypeChanged: '&',
    onCostTypeChanged: '&',
    refType: '=',
    costType: '=',
    refList: '<',
    compList: '<',
  },
  template,
  controller
};

export default menuTabRightComponent;
