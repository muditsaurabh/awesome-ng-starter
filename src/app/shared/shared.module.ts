import * as angular from "angular";
import { NavModule } from './nav/nav.module';
import { FooterModule } from './footer/footer.module';

export const SharedModule = angular
  .module('app.shared', [
    NavModule,
    FooterModule
  ])
  .name;