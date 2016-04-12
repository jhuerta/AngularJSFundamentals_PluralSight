'use strict';

eventsApp.controller('EventListController', ['$scope','eventData', EventListController]);

function EventListController(scope, eventData) {

    /*
    scope.loadEvent = LoadEvent;

    function LoadEvent(eventId)
    {
        window.location = "#/eventdetails/"+ eventId;
    }*/

    eventData.getAllEvents(onSuccess, onError);

    function onSuccess(data, status, headers, config)
    {
        console.log("++++++++++++++++++++++++++++++");
        scope.events = data;
        //log.info('done');
        //log.info(data);
    }

    function onError(data, status, headers, config)
    {
        //log.warn(data, status, headers, config);
    }
}


/*
eventsApp.controller('EventListController', ['$scope', '$location','$log','eventData','$window','$route', EventListController]);

function EventListController(scope, location, log, eventData,window, route) {

    console.log("From route confige:" + route.current.customParams);
    console.log("From url 'fromURL':" + route.current.params.fromURL);
    console.log("Route values':" + route.current.params.eventId);
    console.log("Route values':" + route.current.pathParams.eventId);
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
*/