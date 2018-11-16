import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginButtonComponent from './loginButton.component';

let loginButtonModule = angular.module('loginButton', [
  uiRouter
])

.component('loginButton', loginButtonComponent)

.name;

export default loginButtonModule;
