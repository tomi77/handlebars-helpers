var Handlebars = require('handlebars');
require('../src/coalesce');

describe('A coalesce Handlebars helper', function () {
	it('should return first not empty parameter', function () {
		var template = Handlebars.compile('{{coalesce a b}}');

		expect(template({a: 'not null 1', b: 'not null 2'})).toBe('not null 1');
		expect(template({a: '', b: 'not null'})).toBe('not null');
		expect(template({a: null, b: 'not null'})).toBe('not null');
		expect(template({a: undefined, b: 'not null'})).toBe('not null');
		expect(template({a: null, b: null})).toBe('');
	});
});