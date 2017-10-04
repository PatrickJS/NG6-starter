import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Agents from './agents/agents';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Agents
])

.name;

export default componentModule;
