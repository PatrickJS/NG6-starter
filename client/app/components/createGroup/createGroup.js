import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createGroupComponent from './createGroup.component';
import Name from './components/name/name';
import Email from './components/email/email';
import emailConfirmation from './components/emailConfirmation/emailConfirmation';
import Url from './components/url/url';



let createGroupModule = angular.module('createGroup', [
  uiRouter
])


.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('create', {
      url: '/create',
      template: '<create-group></create-group>'
    })
    .state('create.email', {
      url: '/email',
      template: '<email></email>'
    })
    .state('create.emailconfirmation', {
      url: '/confirmation',
      template: '<email-confirmation></email-confirmation>'
    })
    .state('create.name', {
      url: '/name',
      template: '<name></name>'
    });
    .state('create.url', {
      url: '/url',
      template: '<url></url>'
    });
})

.directive('createGroup', createGroupComponent)
.directive('email', Email)
.directive('emailConfirmation', emailConfirmation)
.directive('url', Url)
.directive('name', Name);

export default createGroupModule;
