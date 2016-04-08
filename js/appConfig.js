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
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController'
    });

    routing.when('/sampledirective', {
        templateUrl: 'templates/SampleDirective.html',
        controller: 'SampleDirectiveController'
    });

    routing.when('/eventdetails/:eventId/:delay', {
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController',
        resolve: {
            event: function($route, eventData)
            {
                return eventData.getEventWithResourceService($route.current.pathParams.eventId, success, error);

                function success(data, status, headers, config)
    {
        return data;
    }

    function error(data, status, headers, config)
    {
        console.log('eeerrror');
    }

            }
        }
    });

    routing.when('/custom/:eventId', {
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