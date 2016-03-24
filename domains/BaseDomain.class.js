'use strict';

class c {
	constructor( base ) {
		this.base = base;
	}

	process( line ) {
		switch(line.trim()) {
			case 'name':
				console.log( this.base.getName() );
				return 1;
		}
	}
}

module.exports = c;
