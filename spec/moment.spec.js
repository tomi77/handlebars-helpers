var Handlebars = require('handlebars');
var moment = require('moment');
var fs = require('fs');
var vm = require('vm');
var path = require('path');

var helper = fs.readFileSync(path.join(__dirname, '/../src/moment.js'));
var script = vm.createScript(helper);
var context = {
    Handlebars: Handlebars,
    moment: moment
};
script.runInNewContext(context);

describe('A moment Handlebars helper', function () {
    'use strict';

    it('should format timestamp', function () {
        var template = Handlebars.compile('{{moment ts format}}');
        var ts = new Date(2014, 5, 20, 22, 42, 15).valueOf();

        expect(template({ts: ts, format: 'YYYY'})).toBe('2014');
        expect(template({ts: ts, format: 'MM'})).toBe('06');
        expect(template({ts: ts, format: 'DD'})).toBe('20');
        expect(template({ts: ts, format: 'HH'})).toBe('22');
        expect(template({ts: ts, format: 'mm'})).toBe('42');
        expect(template({ts: ts, format: 'ss'})).toBe('15');
    });
});