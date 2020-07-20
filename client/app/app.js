import angular from 'angular';
import UiRouter from '@uirouter/angularjs';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common';
import { ComponentsModule } from './components/components';

import 'normalize.css';

const AppModule = angular
  .module('app', [UiRouter, CommonModule, ComponentsModule])
  .config(($locationProvider, $compileProvider, $rootScopeProvider) => {
    'ngInject';

    // See: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    const ON_CHANGES_TTL = 5;

    // Disable this in production for a significant performance boost. See
    // See: https://docs.angularjs.org/guide/production#disabling-debug-data for more.
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');

    // Sets the number of times `$onChanges` hooks can trigger new changes
    // before giving up and assuming that the model is unstable.
    $compileProvider.onChangesTtl(ON_CHANGES_TTL);

    // Sets the number of `$digest` iterations the scope should attempt
    // to execute before giving up and assuming that the model is unstable.
    $rootScopeProvider.digestTtl(ON_CHANGES_TTL);

    // This results in compilation performance gain, as the compiler does not have to check comments and element classes looking for directives.
    // See: https://docs.angularjs.org/guide/production#disable-comment-and-css-class-directives
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);

    // See: https://docs.angularjs.org/api/ng/provider/$compileProvider#strictComponentBindingsEnabled
    $compileProvider.strictComponentBindingsEnabled(false);
  })
  .component('app', AppComponent);

angular.bootstrap(document, [AppModule.name], {
  strictDi: true
});
