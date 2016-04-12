'use strict';

describe('EventListController', EventListControllergtest);

function EventListControllergtest() {
    var $controllerConstructor, scope, mockEventData;


    beforeEach(module('eventsApp'));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();

        mockEventData = sinon.stub({
        	getAllEvents: function(){}
        });
    }));


    it('when initialized should call getAllEventsCall', function() {
        $controllerConstructor('EventListController', {
            '$scope': scope,
            eventData: mockEventData
        });

        expect(mockEventData.getAllEvents.called).toBe(true);
        
    });
}