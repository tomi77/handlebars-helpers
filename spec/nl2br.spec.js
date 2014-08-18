var Handlebars = require('handlebars');
require('../src/nl2br');

describe('A nl2br Handlebars helper', function () {
    'use strict';

    it('should replace new line to br html tag', function () {
        var template = Handlebars.compile('{{nl2br text}}');

        expect(template({text: undefined})).toBe('');
        expect(template({text: null})).toBe('');
        expect(template({text: ''})).toBe('');
        expect(template({text: 'test'})).toBe('test');
        expect(template({text: 'test\ntest'})).toBe('test<br/>test');
    });
});