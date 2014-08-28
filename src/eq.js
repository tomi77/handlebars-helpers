Handlebars.registerHelper('eq', function () {
    'use strict';

    var vals = Array.prototype.slice.call(arguments);
    var val1 = vals.shift();

    return _.any(vals, function (val) {
        return val1 === val;
    });
});