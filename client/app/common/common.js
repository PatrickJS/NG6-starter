import angular from 'angular';
import Navbar from './navbar/navbar';
import StreamBar from './streamBar/streamBar';
import SelectCard from './selectCard/selectCard';
import MenuTabRight from './MenuTabRight/MenuTabRight';
import NiceSelect from './niceSelect/niceSelect';
import StraightTable from './straightTable/straightTable';
import CompareTable from './compareTable/compareTable';

let commonModule = angular.module('app.common', [
  Navbar,
  StreamBar,
  SelectCard,
  MenuTabRight,
  NiceSelect,
  StraightTable,
  CompareTable
])

  .name;

export default commonModule;
