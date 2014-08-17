var Handlebars = require('handlebars');
require('../src/gte');

describe('A gte Handlebars helper', function () {
	it('should return true if first parameter is greater than or equal with second parameter', function () {
		var template = Handlebars.compile('{{#if (gte a b)}}yes{{else}}no{{/if}}');

		expect(template({a: 1, b: 1})).toBe('yes');
		expect(template({a: 1, b: 0})).toBe('yes');
		expect(template({a: 0, b: 1})).toBe('no');
	});
});