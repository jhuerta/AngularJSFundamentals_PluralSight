'use strict';

eventsApp.controller('EditEventController', ['$scope', 'eventData','$log', EditEventController]);

function EditEventController(scope, eventData, log) {

    scope.saveEvent = SaveEvent;
    scope.cancelEvent = CancelEvent;

    function SaveEvent(event, form) {
        if (form.$valid) {
            eventData.saveEventWithResourceService(event, success, error);
        }
    }

    function CancelEvent() {
        window.location = "./EventDetails.html";
    }

    function success() {
        log.warn('success');
    }

    function error() {
        log.warn('error');
    }

}