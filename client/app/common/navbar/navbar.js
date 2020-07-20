import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import { NavbarComponent } from './navbar.component';

export const NavbarModule = angular.module('navbar', [UiRouter]).component('navbar', NavbarComponent).name;
