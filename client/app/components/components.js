import angular from 'angular';
import { HomeModule } from './home/home';
import { AboutModule } from './about/about';

export const ComponentsModule = angular.module('app.components', [HomeModule, AboutModule]).name;
