var Handlebars = require('handlebars');
var _ = require('underscore');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/coalesce.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars,
    _: _
};
script.runInNewContext(context);

describe('A coalesce Handlebars helper', function () {
    'use strict';

    it('should return first not empty parameter', function () {
        var template = Handlebars.compile('{{coalesce a b}}');

        expect(template({a: 'not null 1', b: 'not null 2'})).toBe('not null 1');
        expect(template({a: '', b: 'not null'})).toBe('not null');
        expect(template({a: null, b: 'not null'})).toBe('not null');
        expect(template({a: undefined, b: 'not null'})).toBe('not null');
        expect(template({a: null, b: null})).toBe('');
    });
});
