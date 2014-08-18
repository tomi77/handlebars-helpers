(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['handlebars'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('handlebars'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Handlebars);
    }
}(this, function (Handlebars) {
    'use strict';

    function nl2brHelper (value) {
        if (value) {
            return new Handlebars.SafeString(value.replace(/\n/gm, '<br/>'));
        } else {
            return '';
        }
    }

    Handlebars.registerHelper('nl2br', nl2brHelper);

    return nl2brHelper;
}));