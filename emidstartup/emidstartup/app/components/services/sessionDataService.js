/**
 * Created by prapand on 07-12-2014.
 */
(function(){
    'use strict';

    function SessionDataService(apiAccessService){
        var service = this;
        service.init = init;
        service.getSkills = getSkills;
        service.updateSkill = updateSkill;
        service.addSkill = addSkill;

        var skills = [];

        function addSkill(skill){
            skills.push(skill);
        }

        function getSkills(){
            return skills;
        }


        function init(){
            var promise = apiAccessService.getSkills()
                .then(setSkills);
        }

        function setSkills(listOfSkills) {
            skills = listOfSkills;
        }

        function updateSkill(skillToUpdate){
            _.forEach(skills, function(skill){
                if(skill.id === skillToUpdate.id){
                    skill.value = skillToUpdate.value;
                    skill.name = skillToUpdate.name;
                }
            })
        }
    }

    angular.module('startupbackend')
        .service('sessionDataService',['apiAccessService', SessionDataService]);
})();