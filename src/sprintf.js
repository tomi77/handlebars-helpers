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

    function sprintf(value, format) {
        return _s.sprintf(format, value);
    }

    Handlebars.registerHelper('sprintf', sprintf);
    return sprintf;
}));