(function(){
    'use strict';

    function SkillAddEditController(apiAccessService, sessionDataService){
        var controller = this;

        controller.skills = [];
        controller.updateSkill = updateSkill;

        function updateData(){
            sessionDataService.getSkills().then(populateSkills);

        }

        function populateSkills(skills){
            controller.skills = skills
        }

        function updateSkill(skill){
            apiAccessService.updateSkill(skill).then(updateData);
        }

        updateData();
    }

    angular.module('startupbackend')
        .controller('skillAddEditController',['apiAccessService','sessionDataService', SkillAddEditController]);
})();