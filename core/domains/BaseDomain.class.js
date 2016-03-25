'use strict';

const Domain = require('./Domain.class.js');

class BaseDomain extends Domain {
	constructor( root, base ) {
		super( root, base );
	}

	getShortName() {
		return '\x1b[32mBase\x1b[0m';
	}

	process( line ) {
		var args = Domain.parseArgs(line);
		switch(args[0]) {
			case 'name':
				// Change name
				if (args.length > 1 && args[1] != '') {
					var old = this.base.getName();
					this.base.setName( args[1] );
					console.log( 'The Base ' + old + ' was renamed to ' + this.base.getName() + '!' );
				} else {
					console.log( this.base.getName() );
				}
				return 1;
			case 'monsters':
				//TODO Format the output
				console.log( this.base.getMonsters() );
				return 1;
		}
		return false;
	}

	completer( line ) {
		var completions = 'name monsters'.split(' ');
		var hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits.length ? hits : completions, line];
	}
}

module.exports = BaseDomain;
