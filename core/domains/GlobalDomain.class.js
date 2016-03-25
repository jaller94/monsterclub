'use strict';

const Domain = require('./Domain.class.js');

const Base = require('../classes/Base.class.js');
const Monster = require('../classes/Monster.class.js');
const MonsterClass = require('../classes/MonsterClass.class.js');

class GlobalDomain extends Domain {
	constructor( root, base ) {
		super( root, base );
		this.world = root.world;
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
						var bulbasaurClass = this.world.monsterclasses[0];
						monster = Monster.generate( bulbasaurClass, 5 );
						monster.setName( 'Bisa' );
						break;
					case 'pidgey':
						var pidgeyClass = this.world.monsterclasses[1];
						monster = Monster.generate( pidgeyClass, 3 );
						monster.setName( 'Taubs' );
						break;
					default:
						console.log('There is no such MonsterClass!');
						return 1;
				}
				this.base.addMonster( monster );
				return 1;
		}
		return false;
	}

	completer( line ) {
		var completions = 'recruit bulbasaur ,recruit pidgey ,go base ,go debug ,go shop '.split(',');
		var hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits, line];
	}
}

module.exports = GlobalDomain;
