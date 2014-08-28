Handlebars.registerHelper('neq', function () {
    'use strict';

    var vals = Array.prototype.slice.call(arguments);
    var val1 = vals.shift();

    return _.all(vals, function (val) {
        return val1 !== val;
    });
});