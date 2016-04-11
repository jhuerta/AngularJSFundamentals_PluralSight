// This first method is declaring the controller inside the directive instead
/*'use strict';

eventsApp.directive('greeting', Greeting);

function Greeting() {
    
    function GreetingController(scope, gravatarBuilder)
    {
        scope.sayHello = function() {
            console.log('I say hellO!: ' + gravatarBuilder.buildGravatarUrl("a@gmail.com"));
        };
    }

    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello!</button>",
        controller: ['$scope','gravatarUrlBuilder', GreetingController]
    };
}*/


// Below method is with the controller outside the directive (it could be as well in a different file)

/*
'use strict';

eventsApp.controller('greetingController', ['$scope', 'gravatarUrlBuilder', GreetingController]);

function GreetingController(scope, gravatarBuilder) {

        scope.sayHello =  SayHello;

        function SayHello() {
            console.log('I say hellO!: ' + gravatarBuilder.buildGravatarUrl("a@gmail.com"));
        };
}


eventsApp.directive('greeting', Greeting);

function Greeting() {
    
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello!</button>",
        controller: 'greetingController'
    };
}
*/

'use strict';

// This is using the controller passed as an attribute
eventsApp.directive('greeting', Greeting);

function Greeting() {
    
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello!</button>",
        controller: '@',
        name: 'useThisController'
    };
}