import angular from 'angular';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import './app.scss';

export const AppModule = angular
  .module('app', [
    CoreModule,
    SharedModule,
  ])
  .component('app', AppComponent)
  .config((/*$stateProvider, $urlRouterProvider*/) => {
    // 'ngInject';
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     component: 'home'
    //   });
    // $urlRouterProvider.otherwise('/');
  })
  .run(() => {
    // 'ngInject';
    
  })
  .name;