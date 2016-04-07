'use strict';

eventsApp.controller('OtherServicesController', ['$scope', '$log', OtherServicesController]);

function OtherServicesController(scope, log) {
    log.log('log.log Logging some info, nothing specific');
    log.info('log.info - Logging something for inforamtion purpose');
    log.warn('log.warn - Danger, danger, logging with warn');
    log.error('log.error - This is an error being logged!!!!');



}