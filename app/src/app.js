angular.module('AngularMaterialApp', ['ngMaterial' /*, Users.name*/ ])
    .config(($mdIconProvider, $mdThemingProvider) => {
        // Register the user `avatar` icons
        $mdIconProvider
        //.defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    })
    .controller('AppController', function($scope, $mdSidenav, $mdToast) {
        $scope.toggle = function() {
            $mdSidenav('left').toggle();
        };
        $scope.openToast = function($event) {
            $mdToast.show($mdToast.simple().textContent('Hello!'));
            // Could also do $mdToast.showSimple('Hello');
        };
    });
