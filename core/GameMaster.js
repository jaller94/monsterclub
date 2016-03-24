'use strict';

const Base = require('./classes/Base.class.js');
const BaseDomain = require('./domains/BaseDomain.class.js');

const Loader = require('./Loader.js');

var world = Loader.loadWorld('world/');

var root = {};
root.bases = [];
var base = new Base();

//TODO This should be loaded from a save.
base.setName('Paul Base');

var c = {};

//TODO Set another default
c.domain = 'Base';

c.completer = function(linePartial, callback) {
	var completions = 'name ,base name ,go base ,go areals ,debug monsterclasses ,debug dungeons '.split(',');
	var hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	// show all completions if none found
	callback(null, [hits.length ? hits : completions, linePartial]);
}

c.onLine = function(line) {
	line = line.trim();
	if (c.domain == 'Base') {
		var basedomain = new BaseDomain( base );
		basedomain.process( line );
	}
	switch(line.trim()) {
		case 'base name':
			console.log( base.getName() );
			break;
		case 'go':
			console.log('Go where?');
		case 'go base':
			c.domain = 'Base';
			break;
		case 'go areals':
			c.domain = 'Areals';
			break;
		case 'debug dungeons':
			console.log( world.dungeons );
			break;
		case 'debug monsterclasses':
			console.log( world.monsterclasses );
			break;
		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			break;
	}
}

module.exports = c;
