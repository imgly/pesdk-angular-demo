import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './home.controller';
import './home.css'

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;