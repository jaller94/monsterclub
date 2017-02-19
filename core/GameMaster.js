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

const world = Loader.loadWorld('world/');

const root = {};
root.world = world;
root.bases = [];
const base = new Base();

root.getDungeon = function( needle ) {
	const dungeons = this.world.dungeons;
	if (dungeons == null) {
		return null;
	}
	let result;
	for (let i = dungeons.length - 1; i >= 0; i--) {
		if (dungeons[i].getName() === needle) {
			result = dungeons[i];
			break;
		}
	}
	return result;
};

//TODO This should be loaded from a save.
base.setName('Paul Base');

const c = {};

//TODO Set another default
c.domain = new BaseDomain( root, base );
c.gdomain = new GlobalDomain( root, base );

c.completer = function(linePartial, callback) {
	let completions = [];
	//const hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	if (c.domain) {
		// Call local completer
		completions = c.domain.completer( linePartial )[0];
	}
	// Call global completer
	completions = completions.concat( c.gdomain.completer( linePartial )[0] );
	callback(null, [completions, linePartial]);
	return true;
};

c.onLine = function(line) {
	line = line.trim();
	let processed = false;
	
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
				break;
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
};

module.exports = c;
