'use strict';

eventsApp.directive('collapsible', Collapsible);

function Collapsible() {

    return {
        restrict: 'E',
        template: '<div><h1 ng-click="toggleVisibility()" >AA {{title}} AA</h1><div ng-show="visible" ng-transclude></div></div>',
        controller: function($scope)
        {	$scope.visible = true;
        	$scope.toggleVisibility = function() {
        		$scope.visible = !$scope.visible;
        	};

        },
        replace: true,
        transclude: true,
        scope:{
        	title:"@"
        }
    };
}