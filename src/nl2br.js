Handlebars.registerHelper('nl2br', function (value) {
    'use strict';

    if (value) {
        return new Handlebars.SafeString(value.replace(/\n/gm, '<br/>'));
    } else {
        return '';
    }
});