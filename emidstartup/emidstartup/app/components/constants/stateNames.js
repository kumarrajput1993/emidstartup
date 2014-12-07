(function () {
    'use strict';

    var stateNamesObj = {
        HOME: "home"
    };

    angular.module('startupbackend')
        .constant('stateNames', stateNamesObj);
})();