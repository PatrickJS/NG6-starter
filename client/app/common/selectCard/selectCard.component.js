import template from './selectCard.html';
import controller from './selectCard.controller';
import './selectCard.scss';

let selectCardComponent = {
  bindings: {
    data: "<",
    active: "="
  },
  template,
  controller
};

export default selectCardComponent;
