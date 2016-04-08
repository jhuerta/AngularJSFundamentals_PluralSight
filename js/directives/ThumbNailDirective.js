'use strict';

eventsApp.directive('thumbnailEvent', ThumbnailEvent);

function ThumbnailEvent($compile) {

	return{
		restrict: 'E',
		replace: true,
		templateUrl: './templates/directives/eventThumbnail.html',
		scope: {
			myEvent: "="
			//myEvent: "=myEvent"
		}
		/*link: function(scope, element, attrs, controller)
		{
			var markup = '<div class="well hoverwell" ng-repeat="event in events | orderBy:sortorder">'+
			'<a href="#/eventdetails/{{event.id}}">Details'+
				'<div class="row">'+
						'<span class="span1"> Nameeee: </span>' +
						'<span class="span1"> {{event.name}} </span>' +
					'</div>' +
					'</a>" </div>';
			angular.element(element).html($compile(markup)(scope));
		}*/
	};
}
