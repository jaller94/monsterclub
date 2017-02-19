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
		const args = Domain.parseArgs(line);
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
		const completions = 'buy sell'.split(' ');
		const hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits, line];
	}
}

module.exports = ShopDomain;
