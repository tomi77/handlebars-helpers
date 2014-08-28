var Handlebars = require('handlebars');
var _s = require('underscore.string');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/sprintf.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars,
    _s: _s
};
script.runInNewContext(context);

describe('A sprintf Handlebars helper', function () {
    'use strict';

    it('should format', function () {
        var template = Handlebars.compile('{{sprintf value format}}');

        expect(template({value: 1, format: '%.2f'})).toBe('1.00');
        expect(template({value: 2, format: '%d'})).toBe('2');
    });
});