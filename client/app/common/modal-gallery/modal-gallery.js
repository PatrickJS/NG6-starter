import angular from 'angular';
import modalComponent from './modal-gallery.component';

let modalGalleryModule = angular.module('modal', [])

  .component('modalGallery', modalComponent)

  .name;

export default modalGalleryModule;
