'use strict';

eventsApp.directive('repeatX', RepeatX);

function RepeatX() {

    return {
        // This method, using the compile provider is very expensiver. It is preferable to use the compile method (see below)
        /*link: function(scope,element,attributes, controller)
        {
            for(var i = 0;i< Number(attributes.repeatX)-1;i++)
            {
                var compiledCode = compile(element.clone().attr('repeat-x',0))(scope);
                element.after(compiledCode);
            }
        }*/
        compile: function(element, attributes) {
            for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                var compiledCode = element.clone().attr('repeat-x', 0);
                element.after(compiledCode);
            }

            return function(scope, element, attributes, controller)
            {
                attributes.$observe('text',function(newValue)
                {
                    if(newValue === "Hello World")
                    {
                       element.css('color','red'); 
                    }
                    else
                    {
                     element.css('color','blue');    
                    }

                });
            };
        }
    };
}