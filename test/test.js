var test = require('tape');

test('basic arithmetic', function (t) {
	t.plan(2);

	t.equal(2 + 3, 5, 'these two equal');
	t.equal(8*7+9, 65, 'so do these');
})