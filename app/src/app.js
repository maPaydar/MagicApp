/*
  use webpack : webpack app.js appDist.js
  ** : DO NOT USE --optimize-minimize
*/
const AppController = require('./controllers/AppController.js');

angular.module('AngularMaterialApp', ['ngMaterial' /*, Users.name*/ ])
    .config(function($mdIconProvider, $mdThemingProvider) {
        // Register the user `avatar` icons
        $mdIconProvider
        //.defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    })
    .controller('AppController', AppController);
