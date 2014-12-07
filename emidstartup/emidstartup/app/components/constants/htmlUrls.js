(function(){
   'use strict';

    var urlObject = {
        HOME : 'app/components/home/home.html'
    };

    angular.module('startupbackend')
        .constant('htmlUrls', urlObject);
})();