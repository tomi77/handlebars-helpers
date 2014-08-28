var Handlebars = require('handlebars');
var _s = require('underscore.string');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/truncate.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars,
    _s: _s
};
script.runInNewContext(context);

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