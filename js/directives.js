'use strict';

eventsApp.directive('comment', function($compile){
   return {
      restrict: 'M',
      /*template: '=========================================',*/
      link: function(scope, element, attrs, controller)
		{
			console.log(scope);
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>";
			angular.element(element).html($compile(markup)(scope));
			console.log(element);
		}
   };
});