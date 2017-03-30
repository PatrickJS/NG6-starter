import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= camelCaseName %>Component from './<%= name %>.component';

let <%= camelCaseName %>Module = angular.module('<%= camelCaseName %>', [
  uiRouter
])

.component('<%= camelCaseName %>', <%= camelCaseName %>Component)

.name;

export default <%= camelCaseName %>Module;
