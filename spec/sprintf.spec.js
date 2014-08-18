var Handlebars = require('handlebars');
require('../src/sprintf');

describe('A sprintf Handlebars helper', function () {
    'use strict';

    it('should format', function () {
        var template = Handlebars.compile('{{sprintf value format}}');

        expect(template({value: 1, format: '%.2f'})).toBe('1.00');
        expect(template({value: 2, format: '%d'})).toBe('2');
    });
});