'use strict';

describe('SessionDataService', function(){

    beforeEach(module('startupbackend'))

    it('init function should call apiAcessService to get all the necessary details from api', inject(function(apiAccessService ,sessionDataService){
        var listOfSkills = [createSkill(0)];
        spyOn(apiAccessService, 'getSkills').and.returnValue(fakeResolved(listOfSkills));
        sessionDataService.init();

        expect(apiAccessService.getSkills).toHaveBeenCalled();
        expect(sessionDataService.getSkills()).toBe(listOfSkills);
    }));

    it('addSkill function should add new skill', inject(function(sessionDataService){
        var skill = createSkill(1);
        sessionDataService.addSkill(skill);
        expect(sessionDataService.getSkills()).toContain(skill);
    }));

    it('updateSkill function should update the corresponding values of given skill', inject(function(sessionDataService){
        var skill = createSkill(0);
        sessionDataService.addSkill(skill);

        var newSkill = createSkill(1);
        newSkill.id = 0;
        sessionDataService.updateSkill(newSkill);

        expect(sessionDataService.getSkills()[0].name).toBe(newSkill.name);
    }));
});