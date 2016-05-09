import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import videogular from 'videogular';
import videogularControls from 'videogular-controls';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls"
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
