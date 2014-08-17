(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['handlebars', 'underscore.string'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('handlebars'), require('underscore.string'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Handlebars, root._s);
    }
}(this, function (Handlebars, _s) {
    'use strict';

    function truncate(str, length, truncateStr) {
        return _s.truncate(str, length, truncateStr);
    }

    Handlebars.registerHelper('truncate', truncate);
    return truncate;
}));