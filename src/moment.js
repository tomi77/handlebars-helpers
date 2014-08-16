define(['hbs/handlebars', 'moment'], function (Handlebars, moment) {
    'use strict';

    function _moment(value, format) {
        return moment(value).format(format);
    }

    Handlebars.registerHelper('moment', _moment);
    return _moment;
});