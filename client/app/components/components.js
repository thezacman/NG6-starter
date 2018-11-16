import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import LoginButton from './loginButton/loginButton';
import Hamburger from './hamburger/hamburger';

let componentModule = angular.module('app.components', [
  Home,
  About,
  LoginButton,
  Hamburger
])

.name;

export default componentModule;
