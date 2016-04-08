'use strict';

eventsApp.directive('votingWidget', VotingWidget);

function VotingWidget($compile) {

	return{
		restrict: 'E',
		replace: true,
		templateUrl: './templates/directives/votingWidget.html',
		scope: {
			upvote:"&",
			downvote:"&",
			count:"=",
			name:"="
		}
	};
}
