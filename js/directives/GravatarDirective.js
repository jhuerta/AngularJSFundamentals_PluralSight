'use strict';

eventsApp.directive('gravatar', ['$compile','gravatarUrlBuilder',GetGravatarImage]);

function GetGravatarImage(compile, gravatarBuilder) {

    return {
        restrict: 'E',
        template: '<img/>',
        replace: true,
        //replace: false,
        /*scope: {
            email: "@"
        },*/
        //template:  "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>",
        link: function(scope, element, attrs, controller) {
            attrs.$observe('email', changeImage);

            function changeImage(newValue, oldValue) {
                if (newValue !== oldValue) {
                    var gravatarImage = gravatarBuilder.buildGravatarUrl(newValue);

                    // Using replace =  true with a template = <img/>
                    attrs.$set('src',gravatarImage);

                    // Using the same element:
                    //var markup = '<img src="' + gravatarImage + '"/>';
                    // You can use as well compile, but does not make a difference
                    //angular.element(element)/*.parent()*/.html(markup/*compile(markup)(scope)*/);
                }
            }

        }
    };
}