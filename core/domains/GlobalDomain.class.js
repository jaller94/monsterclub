'use strict';

const Domain = require('./Domain.class.js');

class GlobalDomain extends Domain {
	constructor( root, base ) {
		super( root, base );
	}

	getShortName() {
		return '';
	}

	process( line ) {
		var args = Domain.parseArgs(line);
		switch(args[0]) {
			case 'recruit':
				var monster;
				switch(args[1]) {
					case 'bulbasaur':
						var bulbasaurClass = world.monsterclasses[0];
						monster = Monster.generate( bulbasaurClass, 5 );
						monster.setName( 'Bisa' );
						break;
					case 'pidgey':
						var bulbasaurClass = world.monsterclasses[1];
						monster = Monster.generate( bulbasaurClass, 3 );
						monster.setName( 'Taubs' );
					default:
						console.log('There is no such MonsterClass!');
						return 1;
				}
				this.base.addMonster( monster );
				return 1;
			case 'recruit pidgey':
				this.base.addMonster( monster );
				return 1;
		}
		return false;
	}

	completer( line ) {
		var completions = 'recruit bulbasaur, recruit pidgey ,go base ,go debug ,go shop '.split(',');
		var hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits.length ? hits : completions, line];
	}
}

module.exports = GlobalDomain;
