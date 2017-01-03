import * as angular from "angular";
import { NavComponent } from './nav.component';
import './nav.scss';

export const NavModule = angular
  .module('app.nav', [
  ])
  .component('appNav', NavComponent)
  .name;