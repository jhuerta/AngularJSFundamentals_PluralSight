'use strict';

eventsApp.controller('EventListController', ['$scope', '$location','$log','eventData','$window', EventListController]);

function EventListController(scope, location, log, eventData,window) {

	scope.loadEvent = LoadEvent;

	function LoadEvent(eventId)
	{
		window.location = "#/eventdetails/"+ eventId;
	}
	eventData.getAllEvents(onSuccess, onError);


    function onSuccess(data, status, headers, config)
    {
    	scope.events = data;
    	log.info('done');
    	log.info(data);
    }

    function onError(data, status, headers, config)
    {
    	log.warn(data, status, headers, config);
    }
}