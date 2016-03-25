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
c.domain = new BaseDomain( root, base );
c.gdomain = new GlobalDomain( root, base );

c.completer = function(linePartial, callback) {
	var completions = [];
	var hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	if (c.domain) {
		// Call local completer
		completions = c.domain.completer( linePartial )[0];
		// Call global completer
		completions = completions.concat( c.gdomain.completer( linePartial )[0] );
		callback(null, [completions, linePartial]);
		return true;
	}
	// show all completions if none found
	callback(null, [hits.length ? hits : completions, linePartial]);
}

c.onLine = function(line) {
	line = line.trim();
	var processed = false;
	
	if (c.domain) {
		processed = c.domain.process( line );
	}

	if (!processed) {
		processed = c.gdomain.process( line );
	}

	if (!processed) {
		processed = true;
		switch(line.trim()) {
			case 'go':
				console.log('Go where?');
			case 'go base':
				c.domain = new BaseDomain( root, base );
				break;
			case 'go debug':
				c.domain = new DebugDomain( root, base );
				break;
			case 'go shop':
				c.domain = new ShopDomain( root, base );
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
