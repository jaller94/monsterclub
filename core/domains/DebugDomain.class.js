'use strict';

const Domain = require('./Domain.class.js');

class DebugDomain extends Domain {
	constructor( root, base ) {
		super( root, base );
		this.world = root.world;
	}

	getShortName() {
		return 'Debug';
	}

	process( line ) {
		const args = Domain.parseArgs(line);
		switch(args[0]) {
			case 'dungeons':
				console.log( this.world.dungeons );
				return 1;
			case 'monsterclasses':
				console.log( this.world.monsterclasses );
				return 1;
		}
		return false;
	}

	completer( line ) {
		const completions = 'dungeons monsterclasses'.split(' ');
		const hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits, line];
	}
}

module.exports = DebugDomain;
