var truncate = require('templates/helpers/truncate');

describe('A truncate Handlebars helper', function () {
	it('should truncate', function () {
		expect(truncate('Hello world', 6, 'read more')).toBe('Hello read more');
		expect(truncate('Hello world', 5)).toBe('Hello...');
		expect(truncate('Hello', 10)).toBe('Hello');
		expect(truncate('', 10)).toBe('');
		expect(truncate(null, 10)).toBe('');
		expect(truncate(undefined, 10)).toBe('');
		expect(truncate(1234567890, 5)).toBe('12345...');
	});
});