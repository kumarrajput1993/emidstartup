/**
 * Created by prapand on 07-12-2014.
 */
describe('apiService', function(){
   beforeEach(module('startupbackend'));

    it('getSkills function should get skills from api', inject(function(apiService, $httpBackend, appConstants){
        $httpBackend.expect('GET', appConstants.SKILL_API_PATH).respond({});

        apiService.getSkills();

        $httpBackend.verifyNoOutstandingExpectation();
    }))
});
