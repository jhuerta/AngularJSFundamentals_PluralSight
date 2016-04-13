'use strict'

describe('event registration app', eventRegistrtionApp);

function eventRegistrtionApp() {
    describe('events page', eventsPage);
    describe('details page', detailsPage);

    function eventsPage() {
        it('should have the correct number of events', verifyNumberOfEventsRetrieved);
        it('should have the correct title', verifyTitleOfEvents);

        var numberOfEvents = 6;
        var expectedFirstElementTitle = '11111111111 dddddddd';
        var elementList;
        
        beforeEach(getURL);

        function getURL() {
        	var url = 'http://localhost/angfund/#/events';
        	elementList = element.all(by.repeater('eventitem in events | orderBy:sortorder'));
            browser.get(url);
        }

        function verifyNumberOfEventsRetrieved() {
            expect(elementList.count()).toEqual(numberOfEvents);
        }

        function verifyTitleOfEvents() {
            var titleElement = /*elementList.first().*/element(by.binding('myEvent.name'));
            expect(titleElement.getText()).toEqual(expectedFirstElementTitle);
        }
    }

    function detailsPage() {
        it('should have the proper name', sortByName);
        it('should have correct number of session', numberOfSessions);
        it('should show only one session when selected basic', showPerLevelWorks);
        it('should sort properly', shouldSortProperly);
        it('should change number of votes when upvoting', votingWorks);

        var elementList;
        var titleElementSession = 'AA Directives Masterclass AA';
        var expectedNumberOfSessions = 5;
                
        beforeEach(getURL);

        function getURL() {
        	var url = 'http://localhost/angfund/#/eventdetails/1';
        	elementList = element.all(by.repeater('session in event.sessions'));
            browser.get(url);
        }

        function sortByName(){         
            var elementTitle = elementList.first().element(by.binding('title'));
            expect(elementTitle.getText()).toEqual(titleElementSession);
        }

        function numberOfSessions()
        {         
            var numberOfSessions = elementList.count();
            expect(numberOfSessions).toEqual(expectedNumberOfSessions);
        }

        function showPerLevelWorks()
        {         
            var selectorElementPerLevel = element(by.model('query.level'));
            selectorElementPerLevel.element(by.cssContainingText('option','basic')).click();
            elementList = element.all(by.repeater('session in event.sessions'));
            var numberOfSessions = elementList.count();
            expect(numberOfSessions).toEqual(1);
        }

        function shouldSortProperly()
        {         
            var selectorElementPerLevel = element(by.model('sortorder'));
            selectorElementPerLevel.element(by.cssContainingText('option','Name')).click();
            elementList = element.all(by.repeater('session in event.sessions'));
            var elementTitle = elementList.first().element(by.binding('title'));
            expect(elementTitle.getText()).toEqual('AA aaaaaaaaaaaaaaa AA');
        }

        function votingWorks()
        {         
            element.all(by.deepCss('div.votingUpButton')).first().click();
            elementList = element.all(by.repeater('session in event.sessions'));
            var countValue = elementList.first().element(by.binding('count'));
            expect(countValue.getText()).toEqual('1');
        }
    }
}