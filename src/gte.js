(function (root, factory) {
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

    function gteHelper(val1, val2) {
        return val1 >= val2;
    }

    Handlebars.registerHelper('gte', gteHelper);
    
	return gteHelper;
}));