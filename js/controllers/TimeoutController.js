'use strict';

eventsApp.controller('TimeoutController', ['$scope', '$timeout', TimeoutController]);

function TimeoutController(scope, timeout) {

	scope.cancelTimeout = function()
	{
		timeout.cancel(promise);
	};

	var promise = timeout(function() {
		scope.nameAng = "John Doe";
	},3000);

	setTimeout(function() {
		scope.nameJS = "John Doe";
	},3000);



    

    

    

}