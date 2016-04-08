'use strict';

eventsApp.provider('templateBuilder', ['md5BuilderProvider', TemplateBuilder]);

function TemplateBuilder(md5Builder) {
    
    function Build(id) {
        return md5Builder.build(id);
    }

    return {
        $get: function() {
            return {};
        },
        build: Build
    };
}