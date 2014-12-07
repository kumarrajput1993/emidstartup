(function(){
    'use strict';
    var app = angular.module('startupbackend', ['ui.router', 'models']);

    app.config(['$stateProvider', '$urlRouterProvider','stateNames','htmlUrls', function ($stateProvider, $urlRouterProvider, stateNames,htmlUrls) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state(stateNames.HOME, {
                url: '/home',
                templateUrl: htmlUrls.HOME
            });
    }]);
})();
