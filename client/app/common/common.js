import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import OpenWeather from './open_weather/openWeather';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  OpenWeather.name
]);

export default commonModule;
