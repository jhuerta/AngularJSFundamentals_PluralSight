'use strict';

describe('eventThumbnailDirective', EventThumbnailDirective);

function EventThumbnailDirective() {

    it('should bind correctly the name of the event', act);

    var expectedEventName = "Anything for an event name";
    var expectedEventId = 159564568;
    var htmlCreated;

    beforeEach(module('eventsApp'));

    // Loading the template
    beforeEach(module('templates/directives/eventThumbnail.html'));

    beforeEach(inject(['$compile', '$rootScope', setup]));

    function setup(compile, rootScope) {
        var scope = rootScope.$new();

        scope.someEvent = {
            name: expectedEventName,
            id: expectedEventId,
        };

        var directiveToTest = '<thumbnail-event my-event="someEvent" />';

        htmlCreated = angular.element(directiveToTest);

        compile(htmlCreated)(scope);
        scope.$digest();
    }

    function act() {
        
        var elementGenerated = htmlCreated[0].outerHTML;

        expect(elementGenerated).toContain(expectedEventName);
        expect(elementGenerated).toContain(expectedEventId);
    }
}