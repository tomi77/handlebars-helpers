var Handlebars = require('handlebars');
require('../src/truncate');

describe('A truncate Handlebars helper', function () {
    'use strict';

    it('should truncate', function () {
        var template = Handlebars.compile('{{truncate str pos more}}');

        expect(template({str: 'Hello world', pos: 6, more: 'read more'})).toBe('Hello read more');
        expect(template({str: 'Hello world', pos: 5, more: undefined})).toBe('Hello...');
        expect(template({str: 'Hello', pos: 10, more: undefined})).toBe('Hello');
        expect(template({str: '', pos: 10, more: undefined})).toBe('');
        expect(template({str: null, pos: 10, more: undefined})).toBe('');
        expect(template({str: undefined, pos: 10, more: undefined})).toBe('');
        expect(template({str: 1234567890, pos: 5, more: undefined})).toBe('12345...');
    });
});