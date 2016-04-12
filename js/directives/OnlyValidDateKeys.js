'use strict';

eventsApp.directive('onlyValidDateKeys', OnlyValidDateKeys);

function OnlyValidDateKeys($compile) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
        	console.log(element);
            element.on('keydown', doSomethingOnKeyDown);

            function doSomethingOnKeyDown(event) {
            	console.log('aaaaaaaaa');
                if (isValidKey(event.keyCode)) {
                    return true;
                }
                //alert('Key not valid');


                return false;
            }

            function isValidKey(keyCode) {
            	console.log('KeyCode is: ' + keyCode);
                return (keyCode >= 45 && keyCode <= 57) 
                || (keyCode >= 96 && keyCode <= 105) 
                || (keyCode === 191) 
                || (keyCode === 220) 
                || (keyCode === 8) 
                || (keyCode === 35) 
                || (keyCode === 111) 
                || (keyCode === 36)
                 || (keyCode === 37) || (keyCode === 38) || (keyCode === 39) || (keyCode === 40) || (keyCode === 45) || (keyCode === 46);
            }

        }

    };
}