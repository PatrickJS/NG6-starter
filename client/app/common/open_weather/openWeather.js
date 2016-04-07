import angular from 'angular';
import OpenWeatherFactory from './openWeather.factory';

let openWeatherModule = angular.module('openWeather', [])

.factory('OpenWeather', OpenWeatherFactory);

export default openWeatherModule;
