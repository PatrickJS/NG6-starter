import template from './chartLegend.html';
import controller from './chartLegend.controller';
import './chartLegend.scss';

let chartLegendComponent = {
  bindings: {
    legendList: '<',
    qlikField: '<',
    onLegendSelected: '&'
  },
  template,
  controller
};

export default chartLegendComponent;
