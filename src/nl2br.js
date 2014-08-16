define(['hbs/handlebars'], function (Handlebars) {
    'use strict';

    function nl2br(value) {
        if (value) {
            return new Handlebars.SafeString(value.replace(/\n/gm,'<br/>'));
        } else {
            return '';
        }
    }

    Handlebars.registerHelper('nl2br', nl2br);
    return nl2br;
});