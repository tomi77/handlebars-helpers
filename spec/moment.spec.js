var moment = require('../src/moment');
var ts = new Date(2014, 5, 20, 22, 42, 15).valueOf();

describe('A moment Handlebars helper', function () {
	it('should format timestamp', function () {
		expect(moment(ts, 'YYYY')).toBe('2014');
		expect(moment(ts, 'MM')).toBe('06');
		expect(moment(ts, 'DD')).toBe('20');
		expect(moment(ts, 'HH')).toBe('22');
		expect(moment(ts, 'mm')).toBe('42');
		expect(moment(ts, 'ss')).toBe('15');
		expect(moment(ts, 'dd')).toBe('Pt');
	});
});