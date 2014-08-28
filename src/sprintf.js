Handlebars.registerHelper('sprintf', function (value, format) {
    'use strict';

    return _s.sprintf(format, value);
});