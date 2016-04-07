'use strict'

console.log('bbbbbbbbbb');

eventsApp.factory('$exceptionHandler', ExceptionHandler);

function ExceptionHandler() {

    console.log('aaaaaaaaaaaaaaa');
    return function(exception) {
        console.log("Custom Exception Hanlder " + exception.message);
    };
}