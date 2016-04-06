'use strict';

eventsApp.controller('EventController', ['$scope', 'eventData', EventController]);

function EventController(scope, eventData) {
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
    scope.event = eventData.event;
}