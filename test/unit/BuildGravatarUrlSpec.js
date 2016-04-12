'use strict';

describe('BuildGravatarUrlSpec', BuildGravatarUrlTest);

function BuildGravatarUrlTest() {

    beforeEach(module('eventsApp'));

    function guildGravatarUrlTest(gravatarUrlBuilder) {
        var testEmail = "angularjsdemo@gmail.com";
        var exectedUrl = 'http://www.gravatar.com/avatar/99a8f9d0f6a42ce32af37d8b312ef8a9.jpg?s=200&r=g';
        var actualUrl = gravatarUrlBuilder.buildGravatarUrl(testEmail);

        console.log(actualUrl);

        expect(actualUrl).toBe(exectedUrl);
    }

    var injectedFunction = inject(guildGravatarUrlTest);


    it('should return the correct url given a knoown email', injectedFunction);




    //buildGravatarUrl
}