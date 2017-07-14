import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import CartForm from './item-cart-form/cart-form';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  CartForm
])

.name;

export default commonModule;
