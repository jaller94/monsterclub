'use strict';

class c {
	constructor( root, base ) {
		this.root = root;
		this.world = root.world;
		this.base = base;
	}

	process( line ) {
		switch(line.trim()) {
			case 'dungeons':
				console.log( world.dungeons );
				return 1;
			case 'debug monsterclasses':
				console.log( world.monsterclasses );
				return 1;
		}
		return false;
	}
}

module.exports = c;
