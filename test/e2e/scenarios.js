'use strict'

describe('event registration app', eventRegistrtionApp);

function eventRegistrtionApp() {
    describe('events page', eventsPage);

    function eventsPage() {
        it('should have the correct title and first event', verifyNumberOfEventsRetrieved);

        var numberOfEvents = 6;
        
        beforeEach(getURL);

        function getURL() {
        	var url = 'http://localhost/angfund/#/events';
            browser.get(url);
        }

        function verifyNumberOfEventsRetrieved() {
            var list = element.all(by.repeater('eventitem in events'));
            expect(list.count()).toEqual(numberOfEvents);

            var titleElement = element(by.binding('myEvent.name'));
            expect(titleElement.getText()).toEqual('asdfafaf');
        }
    }
}