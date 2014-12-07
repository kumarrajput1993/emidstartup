/**
 * Created by prapand on 07-12-2014.
 */
(function(){
    'use strict';

    function ApiAccessService(apiService){
        var service = this;

        service.getSkills = getSkills;

        function getSkills(){

        }

    }

    angular.module('startupbackend')
        .service('apiAccessService', ['apiService',ApiAccessService]);
})();