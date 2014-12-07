/**
 * Created by prapand on 07-12-2014.
 */
(function(){
    'use strict';

    function ModelCreatorService(skillService){
        var service = this;

        service.getSkillObject = getSkillObject;

        function getSkillObject(){
            return skillService.getSkillObject();
        };

    };

    angular.module('models')
        .service('modelCreatorService',['skillService', ModelCreatorService]);

})();