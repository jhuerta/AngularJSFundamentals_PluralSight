'use strict';

eventsApp.directive('mySample', MySample);

function MySample($compile) {

	return{
		restrict: 'AECM',
		//template:  "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>",
		link: function(scope, element, attrs, controller)
		{
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>";
			angular.element(element)/*.parent()*/.html($compile(markup)(scope));
		},
		scope:{
			
		}
	};
}
