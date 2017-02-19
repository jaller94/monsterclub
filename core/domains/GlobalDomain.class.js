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
		const args = Domain.parseArgs(line);
		switch(args[0]) {
			case 'recruit':
				let monster;
				let name;
				if (args.length > 1 && args[2] !== '') {
					name = args[2];
				}
				switch(args[1]) {
					case 'bulbasaur':
						const bulbasaurClass = this.world.monsterclasses[0];
						monster = Monster.generate( bulbasaurClass, 5 );
						monster.setName( name || 'Bisa' );
						break;
					case 'pidgey':
						const pidgeyClass = this.world.monsterclasses[1];
						monster = Monster.generate( pidgeyClass, 3 );
						monster.setName( name || 'Taubs' );
						break;
					default:
						console.log('There is no such MonsterClass!');
						return 1;
				}
				this.base.addMonster( monster );
				return 1;
			case 'cheat':
				this.process('recruit bulbasaur Bisa1');
				this.process('recruit bulbasaur Bisa2');
				this.process('send Bisa1 Kleinhain');
				this.process('monsters');
				return 1;
		}
		return false;
	}

	completer( line ) {
		const completions = 'recruit bulbasaur ,recruit pidgey ,go base ,go debug ,go shop ,cheat '.split(',');
		const hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits, line];
	}
}

module.exports = GlobalDomain;
