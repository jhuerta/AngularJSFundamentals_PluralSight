'use strict'

eventsApp.factory('$exceptionHandler', ExceptionHandler);

function ExceptionHandler() {

    return function(exception) {
        console.log("Custom Exception Hanlder " + exception.message);
    };
}