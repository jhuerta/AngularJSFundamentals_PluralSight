'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'tmh.dynamicLocale', 'ngCookies', 'ngRoute'])
    .config(['$routeProvider', appConfig]);


function appConfig(routing) {
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

    routing.otherwise({ redirectTo: '/events' });
}

eventsApp.controller('BaseController', ['$scope', BaseController]);

eventsApp.directive('toHtml', function() {
    return {
        restrict: 'A',
        link: function(scope, el, attrs) {
            el.html(scope.$eval(attrs.toHtml));
        }
    };
});

function BaseController($scope) {
    $scope.HelloWorld = 'hello world!';
}