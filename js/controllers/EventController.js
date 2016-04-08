'use strict';

eventsApp.controller('EventController', ['$scope', 'eventData','$log','$anchorScroll', '$routeParams','$route', EventController]);


function EventController(scope, eventData, log,anchorScroll, routeParams, route) {
	console.log('1');
	scope.downVoteSession = DownVoteSession;
	scope.upVoteSession = UpVoteSession;
console.log('2');
	function DownVoteSession(session)
	{
		session.upVoteCount--;
	}

	function UpVoteSession(session)
	{
		session.upVoteCount++;
	}


	scope.reload = Reload;

	function Reload()
	{
		console.log(route.current.params);
		console.log(route.current.pathParams);

		console.log(route.current.params.eventId);
		console.log(route.current.pathParams.eventId);

		route.reload();

	}

	scope.redStyle = {color:'red'};
	scope.snippet = '<span style="color:red">The sanitized replacement</span>';
	scope.showThis = true;
	scope.sortorder = '-upVoteCount';
	scope.scrollToSession = ScrollToSession;

	function ScrollToSession()
	{
		anchorScroll();
	}

	
	scope.rowEvenClass = 'rowEvenClass';
	scope.rowOddClass = 'rowEvenClass';
	scope.rowClass = 'rowClass';
	scope.refresh = function(id)
	{
		console.log(id);
		eventData.getEventWithResourceService(id, success, error);
	};
    
    eventData.getEventWithResourceService(routeParams.eventId, success, error);
    //eventData.getEventWithHttpService(success,error);

    function success(data, status, headers, config)
    {
    	scope.event = data;
    }

    function error(data, status, headers, config)
    {
    	log.warn(data, status, headers, config);
    }
}