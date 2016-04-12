'use strict';

describe('eventData', EventDataTest);

function EventDataTest() {
    var mockDataEventResource;

    beforeEach(module('eventsApp'));

    beforeEach(function() {
        mockDataEventResource = sinon.stub({
            save: function() {},
            get: function() {}
        });

        module(function($provide) {
            $provide.value('dataEventResource', mockDataEventResource);
        });
    });

    describe('getEventWithResourceService', GetEventWithResourceServiceTest);

    describe('saveEventWithResourceService', SaveEventWithResourceServiceTest);

    function SaveEventWithResourceServiceTest() {

        var injectedFunction = inject(saveEventTest);

        function saveEventTest(eventData) {
            var event = {
                id: 5
            };
            var expectedUsedEvent = {
                id: event.id,
                eventData: event
            };
            var methodOnSuccess = function() {};
            var methodOnFailure = function() {};

            eventData.saveEventWithResourceService(event, methodOnSuccess, methodOnFailure);

            expect(mockDataEventResource.save.args[0][0]).toEqual(expectedUsedEvent);
            expect(mockDataEventResource.save.args[0][1]).toEqual(methodOnSuccess);
            expect(mockDataEventResource.save.args[0][2]).toEqual(methodOnFailure);
        }

        it('should call resource with proper paramters: Id for the event and callbacks for success and error', injectedFunction);

    }

    function GetEventWithResourceServiceTest() {

        var injectedFunction = inject(getEventTest);

        function getEventTest(eventData) {
            var eventId = 1;
            var expectedUsedEventId = 1;
            var methodOnSuccess = function() {};
            var methodOnFailure = function() {};

            eventData.getEventWithResourceService(eventId, methodOnSuccess, methodOnFailure);

            //expect(mockDataGetEventResource.get.calledWith({id: expectedUsedEventId})).toBe(true);
            expect(mockDataEventResource.get.args[0][0]).toEqual({
                id: expectedUsedEventId
            });
            expect(mockDataEventResource.get.args[0][1]).toEqual(methodOnSuccess);
            expect(mockDataEventResource.get.args[0][2]).toEqual(methodOnFailure);
        }

        it('should call resource with proper paramters: Id for the event and callbacks for success and error', injectedFunction);
    }


}