Handlebars.registerHelper('moment', function (value, format) {
    'use strict';

    return moment(value).format(format);
});