/**
 * Created by prapand on 07-12-2014.
 */
(function(){
    'use strict';

    function ApiService($http, appConstants){
        var service = this;
        service.getSkills = getSkills;

        function get(url, errorFor){
            var replyObj = {};
            replyObj.success = false;
            var promise = $http.get(url)
                .success(function(data){
                    replyObj.data = data;
                    replyObj.success = true;
                })
                .error(function(data){
                    $log.error('unable to get ' + errorFor)
                })
                .then(function(){
                    return replyObj;
                });

            return promise;
        }

        function getSkills(){
            return get(appConstants.SKILL_API_PATH, 'skill');
        }
    }

    angular.module('startupbackend')
        .service('apiService', ['$http', 'appConstants',ApiService]);
})()