(function () {

	'use strict';

	var app = angular.module('app',[]);
	
	app.controller('BaseController', ['$scope', BaseController]);

 	function BaseController($scope){
 		$scope.HelloWorld = 'hello world!';
	}

})();