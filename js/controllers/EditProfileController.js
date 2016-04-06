'use strict';

eventsApp.controller('EditProfileController', ['$scope', 'gravatarUrlBuilder',EditProfileController]);

function EditProfileController($scope, gravatarUrlBuilder) {
    $scope.user = {};
    $scope.getGravatarUrl =  gravatarUrlBuilder.buildGravatarUrl;
}