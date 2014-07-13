define(['hbs/handlebars', 'moment'], function (Handlebars, moment) {
    //var formats = require('formats');
    var formats = window;

    function dateTime(ts) {
        return ts !== null ? moment(ts).format(formats.SHORT_DATE_FORMAT + ' ' + formats.SHORT_TIME_FORMAT) : '&mdash;';
    }

    Handlebars.registerHelper('date_time', dateTime);
    return dateTime;
});