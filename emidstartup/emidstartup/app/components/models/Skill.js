/**
 * Created by prapand on 07-12-2014.
 */
(function(){
    'use strict';
    function SkillService(){
        var service = this;

        service.getSkillObject = getSkillObject;

        function getSkillObject(){
            return new SkillObject();
        }

        function SkillObject(){
            var obj = this;
            this.Id = undefined;
            this.Name = undefined;
            this.Value = undefined;
        }
    }

    angular.module('models')
        .service('skillService', SkillService);
})();