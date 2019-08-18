import angular from 'angular';
import Navbar from './navbar/navbar';
import StreamBar from './streamBar/streamBar';
import SelectCard from './selectCard/selectCard';
import MenuTabRight from './MenuTabRight/MenuTabRight';


let commonModule = angular.module('app.common', [
  Navbar,
  StreamBar,
  SelectCard,
  MenuTabRight
])

  .name;

export default commonModule;
