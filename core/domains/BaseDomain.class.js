'use strict';

class c {
	constructor( root, base ) {
		this.base = base;
	}

	process( line ) {
		switch(line.trim()) {
			case 'name':
				console.log( this.base.getName() );
				return 1;
			case 'monsters':
				//TODO Format the output
				console.log( this.base.getMonsters() );
				return 1;
		}
		return false;
	}
}

module.exports = c;
