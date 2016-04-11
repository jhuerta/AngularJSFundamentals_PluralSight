'use strict';

eventsApp.directive('datePicker', DatePicker);

function DatePicker() {

    return {
        restrict: 'A',
        link: function(scope,element)
        { 
            element.datepicker();
        }
    };
}