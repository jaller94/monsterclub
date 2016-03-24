'use strict';

const Base = require('./classes/Base.class.js');
const BaseDomain = require('./domains/BaseDomain.class.js');

var root = {};
root.bases = [];
var base = new Base();

//TODO This should be loaded from a save.
base.setName('Paul Base');

var c = {};

//TODO Set another default
c.domain = "Base";

c.completer = function(linePartial, callback) {
	var completions = 'name ,base name ,go base ,go areals '.split(',');
	if (linePartial == 'b') {
		var completions = 'base name '.split(',');
	}
	var hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	// show all completions if none found
	callback(null, [completions, linePartial]);
}

c.onLine = function(line) {
	line = line.trim();
	if (c.domain == "Base") {
		var basedomain = new BaseDomain( base );
		basedomain.process( line );
	}
	switch(line.trim()) {
		case 'base name':
			console.log( base.getName() );
			break;
		case 'go base':
			c.domain = "Base";
			break;
		case 'go areals':
			c.domain = "Areals";
			break;
		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			break;
	}
}

module.exports = c;
