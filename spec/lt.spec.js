var Handlebars = require('handlebars');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/lt.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars
};
script.runInNewContext(context);

describe('A lt Handlebars helper', function () {
    'use strict';

    it('should return true if first parameter is lower than second parameter', function () {
        var template = Handlebars.compile('{{#if (lt a b)}}yes{{else}}no{{/if}}');

        expect(template({a: 1, b: 1})).toBe('no');
        expect(template({a: 1, b: 0})).toBe('no');
        expect(template({a: 0, b: 1})).toBe('yes');
    });
});