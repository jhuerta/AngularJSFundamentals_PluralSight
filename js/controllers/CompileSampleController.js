'use strict';

eventsApp.controller('CompileSampleController', ['$scope','$compile',CompileSampleController]);

function CompileSampleController(scope, compile)
{
	scope.appendDivToElement = AppendDivToElement;

	function AppendDivToElement(markup)
	{

		var compiledCode = compile(markup)(scope);
		console.log(compiledCode);


var objectToInject = $("<h3>{{name}}</h3>");

		//return objectToInject.appendTo(angular.element("#appendHere"));
		return compiledCode.appendTo(angular.element("#appendHere"));

	}

}