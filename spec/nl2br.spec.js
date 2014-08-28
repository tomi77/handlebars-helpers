var Handlebars = require('handlebars');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/nl2br.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars
};
script.runInNewContext(context);

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