(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['handlebars', 'moment'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('handlebars'), require('moment'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Handlebars, root.moment);
    }
}(this, function (Handlebars, moment) {
    'use strict';

    function momentHelper (value, format) {
        return moment(value).format(format);
    }

    Handlebars.registerHelper('moment', momentHelper);

    return momentHelper;
}));