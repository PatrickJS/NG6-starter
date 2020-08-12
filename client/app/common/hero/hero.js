import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import { HeroComponent } from './hero.component';

export const HeroModule = angular.module('hero', [UiRouter]).component('hero', HeroComponent).name;
