'use strict';

eventsApp.factory('dataEventResource', ['$resource', DataEventResource]);

function DataEventResource(resource) {
    console.log('This is the real data event resource @@@@@@@@@@@@@@@@@@@');

    var iisURL = 'data/event/:id';
    var mockableURL = 'http://demo9135925.mockable.io/events/:id';

    return resource(mockableURL, {
        id: '@id'
    }, {
        'get': {
            method: 'GET',
            cache: false
        }
    });
}