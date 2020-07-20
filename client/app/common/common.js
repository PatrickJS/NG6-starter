import angular from 'angular';
import { NavbarModule } from './navbar/navbar';
import { HeroModule } from './hero/hero';
import { UserModule } from './user/user';

export const CommonModule = angular.module('app.common', [NavbarModule, HeroModule, UserModule]).name;
