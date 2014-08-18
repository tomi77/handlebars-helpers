var Handlebars = require('handlebars');
require('../src/moment');

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