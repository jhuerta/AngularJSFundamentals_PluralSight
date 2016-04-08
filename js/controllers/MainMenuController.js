'use strict';

eventsApp.controller('MainMenuController', ['$scope', '$location','$timeout', MainMenuController]);

function MainMenuController(scope, location,to) {

    scope.createEvent = CreateEvent;
    scope.setHash = SetHash;

    console.log('---------------------------------------------------------');
    console.log('absUrl', location.absUrl());
    console.log('protocol', location.protocol());
    console.log('host', location.host());
    console.log('port', location.port());
    console.log('path', location.path());
    console.log('search', location.search());
    console.log('hash', location.hash());
    console.log('url', location.url());
    console.log('---------------------------------------------------------');

    

    function CreateEvent() {
    	console.log('*********');
    	location.replace();
    	console.log('///////////');
    	to(function() {
        location.url('/newEvent');
        scope.$apply();
        
    }, 0);
        
    }

function SetHash()
    {
    	console.log(new Date());
    	location.hash("sdfasdfadf");
    }



    

}