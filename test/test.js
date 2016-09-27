var test = require('tape');
var classybrew = require('../src/classybrew');

test('INSTANTIATION', function (t) {
	t.plan(1);

	t.equal( typeof(new classybrew()) , 'object', 'Instaniation returns object');
});

test('TEST STATISTICAL METHODS', function (t) {
	t.plan(4);

	//array
	var brew = new classybrew();
	brew.setSeries([2, 4, 6, 8]);

	var breaks = brew.classify('equal_interval');
	t.equal(Array.isArray(breaks), true, 'Equal interval returns array');

	var breaks = brew.classify('jenks', 3);
	t.equal(Array.isArray(breaks), true, 'Jenks returns array');

	var breaks = brew.classify('quantile', 3);
	t.equal(Array.isArray(breaks), true, 'Quantile returns array');

	var breaks = brew.classify('std_deviation', 3);
	t.equal(Array.isArray(breaks), true, 'Standard deviation returns array');

});
