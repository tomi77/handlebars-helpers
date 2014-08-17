var Handlebars = require('handlebars');
require('../src/lte');

describe('A lte Handlebars helper', function () {
	it('should return true if first parameter is lower than or equal with second parameter', function () {
		var template = Handlebars.compile('{{#if (lte a b)}}yes{{else}}no{{/if}}');

		expect(template({a: 1, b: 1})).toBe('yes');
		expect(template({a: 1, b: 0})).toBe('no');
		expect(template({a: 0, b: 1})).toBe('yes');
	});
});