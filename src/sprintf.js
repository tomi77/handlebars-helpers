/*global define*/
define(['hbs/handlebars', 'underscore.string'], function (Handlebars, _s) {
    'use strict';

    function sprintf(value, format) {
        return _s.sprintf(format, value);
    }

    Handlebars.registerHelper('sprintf', sprintf);
    return sprintf;
});