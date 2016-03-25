'use strict';

class c {
	constructor( root, base ) {
		this.base = base;
	}

	process( line ) {
		switch(line.trim()) {
			case 'buy':
				//TODO not implemented
				console.log( "This feature has not been implemented!" );
				return 1;
			case 'sell':
				//TODO not implemented
				console.log( "This feature has not been implemented!" );
				return 1;
		}
		return false;
	}

	completer( line ) {
		var completions = 'buy sell'.split(' ');
		var hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits.length ? hits : completions, line];
	}
}

module.exports = c;
