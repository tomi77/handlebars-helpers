var nl2br = require('../src/nl2br');
var Handlebars = require('handlebars');

describe('A nl2br Handlebars helper', function () {
	it('should replace new line to br html tag', function () {
		expect(nl2br(undefined)).toBe('');
		expect(nl2br(null)).toBe('');
		expect(nl2br('')).toBe('');

		expect(nl2br('test')).toBeInstanceOf(Handlebars.SafeString);
		expect(nl2br('test').string).toBe('test');

		expect(nl2br('test\ntest')).toBeInstanceOf(Handlebars.SafeString);
		expect(nl2br('test\ntest').string).toBe('test<br/>test');
	});
});