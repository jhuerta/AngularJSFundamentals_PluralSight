'use strict';

eventsApp.controller('greetingController', ['$scope', 'gravatarUrlBuilder', GreetingController]);

function GreetingController(scope, gravatarBuilder) {

        scope.sayHello =  SayHello;

        function SayHello() {
            console.log('I say hellO!: ' + gravatarBuilder.buildGravatarUrl("a@gmail.com"));
        }

        this.$get = ['$scope', 'gravatarUrlBuilder', function(scope, gravatarUrlBuilder)
        {
        	//return new greetingControllerProvider(scope, gravatarUrlBuilder);

        }];
}