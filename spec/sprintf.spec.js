var sprintf = require('../src/sprintf');

describe('A sprintf Handlebars helper', function () {
	it('should format', function () {
		expect(sprintf(1, '%.2f')).toBe('1.00');
		expect(sprintf(2, '%d')).toBe('2');
	});
});