'use strict';

describe('EditProfileControllerSpec', EditProfileControllerTest);

function EditProfileControllerTest() {
    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module('eventsApp'));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();

        mockGravatarUrlBuilder = sinon.stub({
        	buildGravatarUrl: function(){}
        });
    }));


    it('should build the gravatar given an email', function() {
        $controllerConstructor('EditProfileController', {
            '$scope': scope,
            gravatarUrlBuilder: mockGravatarUrlBuilder
        });

        var email = "test@test.com";

        scope.getGravatarUrl(email);

        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
        
    });
}