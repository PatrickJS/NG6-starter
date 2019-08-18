import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import StreamBar from './streamBar/streamBar';
import SelectCard from './selectCard/selectCard';
import MenuTabRight from './MenuTabRight/MenuTabRight';


let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  StreamBar,
  SelectCard,
  MenuTabRight
])

  .name;

export default commonModule;
