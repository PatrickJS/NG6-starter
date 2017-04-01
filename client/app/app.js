import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'normalize.css';
import './app.scss'


angular.module('app', [uiRouter])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', {
    template: `<div class="app">
      <div ui-view></div>
      <article-list />
    </div>`,
    restrict: 'E'
  })
  .component('articleList', {
    template: `<h3>...articles here !</h3>`
  });
