'use strict';

eventsApp.config(['$routeProvider', 'templateBuilderProvider', appConfig]);

function appConfig(routing, templateBuilder) {
    routing.when('/newEvent', {
        templateUrl: 'templates/NewEvent.html',
        controller: 'EditEventController'
    });

    routing.when('/events', {
        customParams: 'nothing in particular',
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController'
    });

    routing.when('/eventdetails/:eventId', {
        //templateUrl: 'templates/EventDetails.html',
        // Using template you can build your own template, calling services and so on
        template: function($routeParams) {
            return templateBuilder.build($routeParams.eventId);
        },
        controller: 'EventController'
    });

    routing.otherwise({
        redirectTo: '/events'
    });
}