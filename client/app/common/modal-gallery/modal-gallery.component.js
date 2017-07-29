import controller from './modal-gallery.controller';
import template from './modal-gallery.html';
import './modal-gallery.scss';

let modalComponent = {
  bindings: {
    images: '=',
    visible: '=',
    name: '=',
    currentImage: '='
  },
  template,
  controller
};

export default modalComponent;
