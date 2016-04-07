'use strict';

eventsApp.controller('CookiesSampleController', ['$scope', '$cookieStore', CookiesSampleController]);

function CookiesSampleController(scope, cookieStore) {
    scope.event = {
        id: 1,
        name: "New Event"
    };

    scope.saveEventToCookie = function(value) {
        cookieStore.put('event', value);
    };

    scope.getEventFromCookie = function() {
        scope.cookieValue = cookieStore.get('event');
    };

    scope.removeEventCookie = function() {
        cookieStore.remove('event');
        scope.cookieValue = cookieStore.get('event');
    };



}