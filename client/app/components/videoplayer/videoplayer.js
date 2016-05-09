import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoplayerComponent from './videoplayer.component';


let videoplayerModule = angular.module('videoplayer', [
  uiRouter
])

.component('videoplayer', videoplayerComponent);

export default videoplayerModule;
