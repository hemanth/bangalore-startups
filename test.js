'use strict';
var assert = require('assert');
var bangaloreStartups = require('./');

it('should return a list of startups', function () {
	assert.strictEqual(Object.keys(bangaloreStartups).length > 1000, true);
});
