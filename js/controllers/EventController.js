'use strict';

eventsApp.controller('EventController', ['$scope', EventController]);

function EventController($scope) {
	$scope.downVoteSession = DownVoteSession;
	$scope.upVoteSession = UpVoteSession;

	function DownVoteSession(session)
	{
		session.upVoteCount--;
	}

	function UpVoteSession(session)
	{
		session.upVoteCount++;
	}


	$scope.redStyle = {color:'red'};
	$scope.snippet = '<span style="color:red">The sanitized replacement</span>';
	$scope.showThis = true;
	$scope.rowEvenClass = 'rowEvenClass';
	$scope.rowOddClass = 'rowEvenClass';
	$scope.rowClass = 'rowClass';
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Padre Claret, 9 8K',
            city: 'Aranda de Duero',
            province: 'CP.: 09400, Burgos',
        },
        imageURL: 'img/angularjs-logo.png',
        sessions: [{
            name: 'Directives Masterclass',
            creatorName: 'Spud Webb',
            level: 'basic',
            upVoteCount: 0
        }, {
            name: 'Scopes for fun and profit',
            creatorName: 'Larry Bird',
            level: 'easy',
            upVoteCount: 0
        }, {
            name: 'Well behaved controllers',
            creatorName: 'Michael Jordan',
            level: 'hight',
            upVoteCount: 0
        }]
    };
}