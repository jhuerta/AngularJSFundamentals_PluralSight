'use strict';

eventsApp.controller('ParseSampleController', ['$scope', '$parse', ParseSampleController]);

function ParseSampleController(scope, parse) {
    scope.parseThis = ParseThis;

    function ParseThis(markup) {

        var parsedFunction = parse(markup);
        var result = parsedFunction();
        console.log(result);

        var objectToInject = $("<h3>" + result + "</h3>");

        var getter = parse("event.name");
        var context1 = {event :{name:'Benicassim Festival'}};
        var context2 = {event :{name:'Sonorama World Music'}};

        console.log(getter(context1));
        console.log(getter(context2));

        var setter = getter.assign;
        setter(context2, "Festival de la Ribera");
        console.log(getter(context2));

        return objectToInject.appendTo(angular.element("#appendHere"));
    }

}