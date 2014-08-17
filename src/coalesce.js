(function (root, factory) {
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

	var coalesceHelper = function coalesceHelper() {
		var values = [];
		for (var i = 0; i < arguments.length - 1; i++) {
			values.push(arguments[i]);
		}
		values = _.compact(values);
		return values.length > 0 ? values[0] : '';
	}
	
	Handlebars.registerHelper('coalesce', coalesceHelper);
	
	return coalesceHelper;
}));