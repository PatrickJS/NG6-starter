import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import CartForm from './item-cart-form/cart-form';
import ModalGallery from './modal-gallery/modal-gallery';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  CartForm,
  ModalGallery
])

.name;

export default commonModule;
