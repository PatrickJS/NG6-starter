import template from './chartLegend.html';
import controller from './chartLegend.controller';
import './chartLegend.scss';

let chartLegendComponent = {
  bindings: {
    legendList: '<'
  },
  template,
  controller
};

export default chartLegendComponent;
