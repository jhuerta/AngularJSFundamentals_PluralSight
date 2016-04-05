'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize']);

eventsApp.controller('BaseController', ['$scope', BaseController]);

function BaseController($scope) {
    $scope.HelloWorld = 'hello world!';
}