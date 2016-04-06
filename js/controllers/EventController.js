'use strict';

eventsApp.controller('EventController', ['$scope', 'eventData','$log', EventController]);

function EventController(scope, eventData, log) {
	scope.downVoteSession = DownVoteSession;
	scope.upVoteSession = UpVoteSession;

	function DownVoteSession(session)
	{
		session.upVoteCount--;
	}

	function UpVoteSession(session)
	{
		session.upVoteCount++;
	}


	scope.redStyle = {color:'red'};
	scope.snippet = '<span style="color:red">The sanitized replacement</span>';
	scope.showThis = true;
	scope.sortorder = '-upVoteCount';

	
	scope.rowEvenClass = 'rowEvenClass';
	scope.rowOddClass = 'rowEvenClass';
	scope.rowClass = 'rowClass';
    //scope.event = eventData.getEventRes();
    
    eventData.getEventWithResourceService(success, error);
    eventData.getEventWithHttpService(success,error);

    function success(data, status, headers, config)
    {
    	log.warn(data);
    	log.warn(status);
    	scope.event = data;
    }

    function error(data, status, headers, config)
    {
    	log.warn(data, status, headers, config);
    }
}