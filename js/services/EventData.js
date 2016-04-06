eventsApp.factory('eventData', ['$http', '$resource', 'sampleCache', EventData]);

function EventData(http, resource, theCache) {

var iisURL = 'data/event/:id';
var mockableURL = 'http://demo9135925.mockable.io/events';

    var dataResource = resource(mockableURL, {
        id: '@id'

    },{
        'get': { method:'GET', cache: false}
    });

    return {
        saveEentWithResourceService: SaveEentWithResourceService,
        getEventWithResourceService: GetEventWithResourceService,
        getEventWithHttpService: GetEventWithHttpService,
        getEventWithHardCodeValues: GetEventWithHardCodeValues
    };

    function GetEventWithHardCodeValues() {
        return {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Padre Claret, 9 8K',
                city: 'Aranda de Duero',
                province: 'CP.: 09400, Burgos',
            },
            imageURL: 'img/angularjs-logo.png',
            sessions: [{
                name: 'Directives Masterclass',
                creatorName: 'Spud Webb',
                level: 'basic',
                upVoteCount: 0,
                dificulty: 0
            }, {
                name: 'Scopes for fun and profit',
                creatorName: 'Larry Bird',
                level: 'easy',
                upVoteCount: 0,
                dificulty: 1
            }, {
                name: 'Well behaved controllers',
                creatorName: 'Mdddddddddddd',
                level: 'high',
                upVoteCount: 0,
                dificulty: 1
            }, {
                name: 'aaaaaaaaaaaaaaa',
                creatorName: 'eeeeeeeee',
                level: 'high',
                upVoteCount: 0,
                dificulty: 0
            }, {
                name: 'bbbbbbbbbb',
                creatorName: 'cccccc',
                level: 'high',
                upVoteCount: 0,
                dificulty: 2
            }]
        };
    }

    function SaveEentWithResourceService(event, onSuccess, onError) {
        var theEvent = {
            id: event.id,
            eventData : event
        };


        dataResource.save(theEvent, onSuccess, onError);
    }

    function GetEventWithResourceService(onSuccess, onError) {
        console.log('333333333333');

        dataResource.get({
            id: 1
        }, onSuccess, onError);
        /*).$promise.then(onSuccess, onError);*/
        /*).$promise.then(onSuccess).catch(onError);*/
    }

    function GetEventWithHttpService(onSuccess, onError) {
        return http({
            method: 'GET',
            url: 'data/event/1'
            //url: 'http://demo9135925.mockable.io/events'
        }).success(onSuccess).error(onError);
    }
}