import angular from 'angular';
import Components from './components/components';
import Services from './services/services'
import AppComponent from './app.component';

angular.module('app', [
    Components,
    Services,
  ])
  .component('app', AppComponent);
