'use strict';

eventsApp.controller('SampleDirectiveController', ['$scope', SampleDirectiveController]);

function SampleDirectiveController(scope) {

	scope.ItWorks = "Yes, it is working!";
	scope.sampleData = "soem data";
}