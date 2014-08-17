var Handlebars = require('handlebars');
require('../src/gt');

describe('A gt Handlebars helper', function () {
	it('should return true if first parameter is greater than second parameter', function () {
		var template = Handlebars.compile('{{#if (gt a b)}}yes{{else}}no{{/if}}');

		expect(template({a: 1, b: 1})).toBe('no');
		expect(template({a: 1, b: 0})).toBe('yes');
		expect(template({a: 0, b: 1})).toBe('no');
	});
});