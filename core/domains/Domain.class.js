'use strict';

class Domain {
	constructor( root, base ) {
		this.root = root;
		this.base = base;
	}

	getShortName() {
		return '\x1b[30m\x1b[47m?\x1b[0m';
	}

	process( line ) {
		return false;
	}

	completer( line ) {
		return [[], ''];
	}

	static parseArgs( line ) {
		//TODO detect quotes
		return line.trim().split(' ');
	}
}

module.exports = Domain;
