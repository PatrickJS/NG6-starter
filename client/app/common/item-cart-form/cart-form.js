import angular from 'angular';
import cartFormComponent from './cart-form.component';

let cartFormModule = angular.module('cartForm', [])

  .component('cartForm', cartFormComponent)

  .name;

export default cartFormModule;
