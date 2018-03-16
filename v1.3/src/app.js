
// Angular specific part
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routing from './app.config';
import home from './features/home';
import photoeditorsdkreactui from './components/photoeditorsdk-reactui'
import photoeditorsdkdesktopui from './components/photoeditorsdk-desktopui'


try {
    angular
      .module('app', [uirouter, home, photoeditorsdkreactui, photoeditorsdkdesktopui])
      .config(routing);
}
catch(e) {
    console.log(e.message)
}
