var Handlebars = require('handlebars');
var fs = require('fs');
var vm = require('vm');
var path = require('path');
var CoffeeScript = require('coffee-script');

var helper = fs.readFileSync(path.join(__dirname, '/../src/gt.coffee'));
var script = vm.createScript(CoffeeScript.compile(helper.toString()));
var context = {
    Handlebars: Handlebars
};
script.runInNewContext(context);

describe('A gt Handlebars helper', function () {
    'use strict';

    it('should return true if first parameter is greater than second parameter', function () {
        var template = Handlebars.compile('{{#if (gt a b)}}yes{{else}}no{{/if}}');

        expect(template({a: 1, b: 1})).toBe('no');
        expect(template({a: 1, b: 0})).toBe('yes');
        expect(template({a: 0, b: 1})).toBe('no');
    });
});