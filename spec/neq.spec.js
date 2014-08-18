var Handlebars = require('handlebars');
require('../src/neq');

describe('A neq Handlebars helper', function () {
    'use strict';

    it('should return true if first parameter is not equal (!==) second parameter', function () {
        var template = Handlebars.compile('{{#if (neq a b)}}yes{{else}}no{{/if}}');

        expect(template({a: 1, b: 1})).toBe('no');
        expect(template({a: 1, b: 0})).toBe('yes');
        expect(template({a: 1, b: '1'})).toBe('yes');
        expect(template({a: '1', b: '1'})).toBe('no');
    });
});