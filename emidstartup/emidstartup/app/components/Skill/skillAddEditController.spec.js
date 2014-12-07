'use strict'
describe('skillAddEditController', function(){
    var cont, apiAccessService, mockResponse, sessionDataService;
    beforeEach(module('startupbackend'));

    beforeEach(inject(function($controller){
        apiAccessService = sinon.stub({
            updateSkill : function(){ }
        });

        sessionDataService = sinon.stub({
            getSkills : function(){ }
        });

        mockResponse = [{
            id: 0,
            name: 'SkillName',
            value: 'SkillValue'
        }];
        spyOn(sessionDataService, 'getSkills').and.returnValue(fakeResolved(mockResponse));

        cont = $controller('skillAddEditController',{
            apiAccessService: apiAccessService,
            sessionDataService: sessionDataService
        });
    }));

    describe('init', function(){
       it('should initialize itself by taking data from sessionDataService', function(){
         expect(cont.skills).toBe(mockResponse);
       });
    });

    it('should have a function to update a given skill', function(){
        var mockSkill = createSkill(1);
        spyOn(apiAccessService, 'updateSkill').and.returnValue(fakeResolved());
        cont.updateSkill(mockSkill);

        expect(apiAccessService.updateSkill).toHaveBeenCalledWith(mockSkill);
        expect(sessionDataService.getSkills).toHaveBeenCalled();
    });


});