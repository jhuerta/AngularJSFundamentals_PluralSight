'use strict';

eventsApp.controller('ExceptionHandlerController', ['$scope', '$timeout', ExceptionHandlerController]);

function ExceptionHandlerController(scope, timeout) {

throw {	message: 'error custom message',
				somethingElse: 'whaterver'};
				
	scope.throwException = function()
	{
		throw {	message: 'error custom message',
				somethingElse: 'whaterver'};
	};
}