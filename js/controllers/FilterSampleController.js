'use strict';

eventsApp.controller('FilterSampleController', ['$scope', '$filter', 'dificultyImageFileNameFilter', FilterSampleController]);

function FilterSampleController(scope, filter, durationsFilter) {

	scope.data = {};

	var durations = filter('dificultyImageFileName');
	scope.data.duration1 = durations(1);
	scope.data.duration2 = durations(2);
	scope.data.duration3 = durations(3);
	scope.data.duration4 = durations(4);

	scope.data.duration01 = durationsFilter(1);
	scope.data.duration02 = durationsFilter(2);
	scope.data.duration03 = durationsFilter(3);
	scope.data.duration04 = durationsFilter(4);



}