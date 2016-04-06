'use strict';

eventsApp.controller('EditEventController', ['$scope', EditEventController]);

function EditEventController($scope) {

	$scope.saveEvent = SaveEvent;
	$scope.cancelEvent = CancelEvent;

	function SaveEvent(event, form)
	{
		console.log(form);
		if(form.$valid)
		{
				alert(event.name);
		}
	}

		function CancelEvent()
	{
		window.location = "./EventDetails.html";
	}

}