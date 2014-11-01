(function() {
    'use strict';

    var module = angular.module('bingbash', ['ngRoute', 'ui.bootstrap', 'chart.js', 'angular-loading-bar'])
        .config(function($locationProvider, $routeProvider) {
            // $locationProvider.html5Mode(true);
            $routeProvider.when('/:experiment', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeController',
                    resolve: {
                        apiPrepService: function($route, apiService) {
                            var experiment = $route.current.params.experiment;
                            if (!experiment) {
                                experiment = 381;
                            }
                            return apiService.getData(experiment);
                        }
                    }
                })
                .otherwise({
                    redirectTo: '/381'
                });
        });
})();
