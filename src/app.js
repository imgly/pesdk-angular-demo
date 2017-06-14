
// Angular specific part
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './features/home';
import pesdk from './components/pesdk'

try {
    angular
      .module('app', [uirouter, home, pesdk])
      .config(routing);
}
catch(e) {
    console.log(e.message)
}
