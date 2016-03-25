'use strict';

const Domain = require('./Domain.class.js');

class ShopDomain extends Domain {
	constructor( root, base ) {
		super( root, base );
	}

	getShortName() {
		return '\x1b[33mShop\x1b[0m';
	}

	process( line ) {
		var args = Domain.parseArgs(line);
		switch(args[0]) {
			case 'buy':
				//TODO not implemented
				console.log( 'This feature has not been implemented!' );
				return 1;
			case 'sell':
				//TODO not implemented
				console.log( 'This feature has not been implemented!' );
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

module.exports = ShopDomain;
