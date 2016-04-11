// Sharing Directive
// 
// This is using the controller passed as an attribute
eventsApp.directive('spanish', SpanishDirective)
            .directive('french', FrenchDirective)
            .directive('talk', Talk);

function Talk() {
    return {
        priority: -1,
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello!</button>",
        controller: 'sharedController'
    };
}

eventsApp.controller('sharedController', ['$scope',SharedController]);

function SharedController(scope)
{
    
            var words = ['hello'];
            
            scope.sayHello = function(){
                alert(words.join());
            };

            function AddWord(word)
            {
                words.push(word);
            }

            return {
                addWord: AddWord
            };
        
}

function SpanishDirective() {
    return {
        restrict: 'A',
        require: 'talk',
        priority: -1,
        terminal: true,
        link: function(scope, element, attrs, controller)
        {
            controller.addWord('Hola');
        }
    };
}

function FrenchDirective() {
    return {
        priority: -2,
        restrict: 'A',
        require: 'talk',
        link: function(scope, element, attrs, controller)
        {
            controller.addWord('Halo');
        }
    };
}

