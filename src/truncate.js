define(['hbs/handlebars', 'underscore.string'], function (Handlebars, _s) {
    'use strict';

    function truncate(str, length, truncateStr) {
        return _s.truncate(str, length, truncateStr);
    }

    Handlebars.registerHelper('truncate', truncate);
    return truncate;
});