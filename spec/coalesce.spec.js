var coalesce = require('../src/coalesce');

describe('A coalesce Handlebars helper', function () {
	it('should return first not empty parameter', function () {
		expect(coalesce('not null 1', 'not null 2')).toBe('not null 1');
		expect(coalesce('', 'not null')).toBe('not null');
		expect(coalesce(null, 'not null')).toBe('not null');
		expect(coalesce(undefined, 'not null')).toBe('not null');
		expect(coalesce(undefined, null, '', 'not null')).toBe('not null');
		expect(coalesce(null, null)).toBe('');
	});
});