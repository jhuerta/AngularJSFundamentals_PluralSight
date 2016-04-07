'use strict';

eventsApp.controller('LocaleServiceController', ['$scope', '$locale','$document','tmhDynamicLocale','$compile', LocaleServiceController]);

function LocaleServiceController(scope, locale,document,tmhDynamicLocale,compile) {

    

    scope.myDate = Date.now();
    scope.myFormat = locale.DATETIME_FORMATS.fullDate;

    scope.changeLocale = ChangeLocale;

    function ChangeLocale(newLocale)
    {
        tmhDynamicLocale.set(newLocale);
    }

    

}