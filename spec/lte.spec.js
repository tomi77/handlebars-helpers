var Handlebars = require('handlebars');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/lte.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars
};
script.runInNewContext(context);

describe('A lte Handlebars helper', function () {
    'use strict';

    it('should return true if first parameter is lower than or equal with second parameter', function () {
        var template = Handlebars.compile('{{#if (lte a b)}}yes{{else}}no{{/if}}');

        expect(template({a: 1, b: 1})).toBe('yes');
        expect(template({a: 1, b: 0})).toBe('no');
        expect(template({a: 0, b: 1})).toBe('yes');
    });
});