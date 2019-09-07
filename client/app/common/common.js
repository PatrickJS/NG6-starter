import angular from 'angular';
import Navbar from './navbar/navbar';
import SideBar from './sideBar/sideBar';
import StreamBar from './streamBar/streamBar';
import SelectCard from './selectCard/selectCard';
import MenuTabRight from './MenuTabRight/MenuTabRight';
import NiceSelect from './niceSelect/niceSelect';
import ChartLegend from './chartLegend/chartLegend';
import StraightTable from './straightTable/straightTable';
import CompareTable from './compareTable/compareTable';

let commonModule = angular.module('app.common', [
  Navbar,
  SideBar,
  StreamBar,
  SelectCard,
  MenuTabRight,
  NiceSelect,
  StraightTable,
  CompareTable,
  ChartLegend
])

  .name;

export default commonModule;
