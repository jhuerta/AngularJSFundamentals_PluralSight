'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource','tmh.dynamicLocale']);


eventsApp.controller('BaseController', ['$scope', BaseController]);

eventsApp.directive('toHtml', function() {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      el.html(scope.$eval(attrs.toHtml));
    }
  };
});

function BaseController($scope) {
    $scope.HelloWorld = 'hello world!';
}