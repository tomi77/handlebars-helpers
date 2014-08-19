(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['handlebars', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('handlebars'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Handlebars, root._);
    }
}(this, function (Handlebars, _) {
    'use strict';

    function neqHelper () {
        var vals = Array.prototype.slice.call(arguments);
        var val1 = vals.shift();

        return _.all(vals, function (val) {
            return val1 !== val;
        });
    }

    Handlebars.registerHelper('neq', neqHelper);

    return neqHelper;
}));