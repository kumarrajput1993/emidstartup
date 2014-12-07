function fakeResolved(expectedResponse) {
    return {
        then: function(callback) {
            callback(expectedResponse);
        }
    };
}

function createSkill(id){
    var skill = {
        id: id,
        name: 'skillName' + id,
        value: 'skillId' + id
    };

    return skill;
}

var I18N_JS_PATH = 'i18n/resources-default.js';
