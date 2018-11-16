import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hamburgerComponent from './hamburger.component';

let hamburgerModule = angular.module('hamburger', [
  uiRouter
])

.component('hamburger', hamburgerComponent)

.name;

export default hamburgerModule;
