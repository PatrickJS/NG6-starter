import template from './cart-form.html';
import controller from './cart-form.controller';
import './item-cart.scss'

let cartFormComponent = {
  bindings: {
    price: '='
  },
  template,
  controller
};

export default cartFormComponent;
