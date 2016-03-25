'use strict';

// Base
const Base = require('./classes/Base.class.js');
const Monster = require('./classes/Monster.class.js');
const MonsterClass = require('./classes/MonsterClass.class.js');

// Domains
const BaseDomain = require('./domains/BaseDomain.class.js');
const DebugDomain = require('./domains/DebugDomain.class.js');
const GlobalDomain = require('./domains/GlobalDomain.class.js');
const ShopDomain = require('./domains/ShopDomain.class.js');

const Loader = require('./Loader.js');

var world = Loader.loadWorld('world/');

var root = {};
root.world = world;
root.bases = [];
var base = new Base();

//TODO This should be loaded from a save.
base.setName('Paul Base');

var c = {};

//TODO Set another default
c.domain = 'Base';

c.completer = function(linePartial, callback) {
	var completions = 'name ,base name ,go base ,go shop ,debug monsterclasses ,debug dungeons ,recruit bulbasaur ,recruit pidgey ,monsters ,base monsters'.split(',');
	var hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	if (c.domain == 'Shop') {
		var shopdomain = new ShopDomain( root, base );
		completions = shopdomain.completer( linePartial )[0];
		callback(null, [completions, linePartial]);
		return true;
	}
	// show all completions if none found
	callback(null, [hits.length ? hits : completions, linePartial]);
}

c.onLine = function(line) {
	line = line.trim();
	var processed = false;
	
	if (c.domain == 'Base' && !processed) {
		var domain = new BaseDomain( root, base );
		processed = domain.process( line );
	}

	if (c.domain == 'Shop' && !processed) {
		var domain = new ShopDomain( root, base );
		processed = domain.process( line );
	}

	if (c.domain == 'Debug' && !processed) {
		var domain = new DebugDomain( root, base );
		processed = domain.process( line );
	}

	if (!processed) {
		var domain = new GlobalDomain( root, base );
		processed = domain.process( line );
	}

	if (!processed) {
		processed = true;
		switch(line.trim()) {
			case 'go':
				console.log('Go where?');
			case 'go base':
				c.domain = 'Base';
				break;
			case 'go debug':
				c.domain = 'Debug';
				break;
			case 'go shop':
				c.domain = 'Shop';
				break;
			default:
				processed = false;
		}
	}

	if (!processed) {
		console.log('Say what? I might have heard `' + line.trim() + '`');
	}
}

module.exports = c;
