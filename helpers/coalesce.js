define(['hbs/handlebars', 'underscore'], function (Handlebars, _) {
    function coalesce() {
        //var permissions = require('permissions'),
        var values = [];
        for (var i = 0; i < arguments.length; i++) {
            values.push(arguments[i]);
        }
        values = _.compact(values);
        return values.length > 0 ? values[0] : '';
    }

    Handlebars.registerHelper('coalesce', coalesce);
    return coalesce;
});