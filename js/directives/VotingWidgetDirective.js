'use strict';

eventsApp.directive('votingWidget', VotingWidget);

function VotingWidget($compile) {

	return{
		restrict: 'E',
		replace: true,
		templateUrl: './templates/directives/votingWidget.html',
		scope: {
			upvote:"&attrToDoUp",
			downvote:"&attrToDoDown",
			count:"=attrCount",
			name:"=attrName"
		}
	};
}
