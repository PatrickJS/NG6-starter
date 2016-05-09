import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import VideoPlayer from './videoplayer/videoplayer';

let componentModule = angular.module('app.components', [
  Home.name,
  VideoPlayer.name,
  About.name
]);

export default componentModule;
