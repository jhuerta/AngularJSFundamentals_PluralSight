'use strict';

describe('DataEventResourceSpec', DataEventResourceTest);

function DataEventResourceTest() {

    it('should issue a GET request to ' + exectedUrl, injectedFunctionForTestingGettingParameters);

    it('should return the correct data when called', injectedFunctionForTestingReturnValue);

    it('should called correct method when saving', injectedFunctionForTestingSaving);

    beforeEach(module('eventsApp'));

    var eventId = 99;
    var exectedUrl = 'http://demo9135925.mockable.io/events/' + eventId;
    var failingURL = 'http://demo9135925.mockable.io/events/' + 111;

    function injectedFunctionForTestingGettingParameters()  {inject(['dataEventResource', '$httpBackend', methodCallingGetResource]);}
    function methodCallingGetResource(dataResource, http) {
        http.expectGET(exectedUrl);
        http.when('GET', exectedUrl).respond({});

        dataResource.get({
            id: eventId
        });

        http.flush();

        http.verifyNoOutstandingExpectation();
        http.verifyNoOutstandingRequest();
    }

    function injectedFunctionForTestingReturnValue() {inject(methodCallingTestingReturnValue);}
    function methodCallingTestingReturnValue(dataEventResource, $httpBackend) {
        var anything = 1;
        var otherValue = "whatever";
        var expectedEvent = {
            anything: anything,
            otherValue: otherValue
        };
        $httpBackend.when('GET', exectedUrl).respond(expectedEvent);
        var actualValue = dataEventResource.get({
            id: eventId
        });
        $httpBackend.flush();

        expect(actualValue.anything).toEqual(anything);
        expect(actualValue.otherValue).toEqual(otherValue);
    }

    function injectedFunctionForTestingSaving() {inject(methodCallingSavingMethod);}
    function methodCallingSavingMethod(dataEventResource, $httpBackend) {
        $httpBackend.expectPOST(exectedUrl);

        $httpBackend.when('POST', exectedUrl).respond({});

        dataEventResource.save({
            id: eventId
        });

        $httpBackend.flush();

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }
}