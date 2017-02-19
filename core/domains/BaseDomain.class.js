'use strict';

const Domain = require('./Domain.class.js');

const Base = require('../classes/Base.class.js');
const Monster = require('../classes/Monster.class.js');
const MonsterClass = require('../classes/MonsterClass.class.js');
const Team = require('../classes/Team.class.js');

class BaseDomain extends Domain {
	constructor( root, base ) {
		super( root, base );
	}

	getShortName() {
		return '\x1b[32mBase\x1b[0m';
	}

	process( line ) {
		const args = Domain.parseArgs(line);
		switch(args[0]) {
			case 'name':
				// Change name
				if (args.length > 1 && args[1] !== '') {
					const oldName = this.base.getName();
					this.base.setName( args[1] );
					console.log( 'The Base ' + oldName + ' was renamed to ' + this.base.getName() + '!' );
				} else {
					console.log( this.base.getName() );
				}
				return 1;
			case 'monsters':
				//TODO Format the output
				console.log( this.base.getMonsters() );
				return 1;
			case 'send':
				const monster = this.base.getMonster( args[1] );
				const dungeon = this.root.getDungeon( args[2] );
				console.log( monster );
				console.log( dungeon );
				if (!monster) {
					console.log( 'Was not able to find the monster.' );
					return 1;
				}
				if (!dungeon) {
					console.log( 'Was not able to find the dungeon.' );
					return 1;
				}

				const team = new Team();
				const answer = team.addMonster( monster );
				if (!answer) {
					console.log( 'Team creation failed: ' + answer );
				}

				this.base.send( team, dungeon );
				return 1;
			case 'teams':
				//TODO Format the output
				console.log( this.base.getActiveTeams() );
				return 1;
			case 'wait':
				if (args.length > 1) {
					this.base.act( args[1] );
				}
				console.log( 'Please specify an amount of ticks or an event you want to wait for.' );
				return 1;
		}
		return false;
	}

	completer( line ) {
		const completions = 'name monsters send teams wait'.split(' ');
		const hits = completions.filter((c) => { return c.indexOf(line) == 0 });
		// show all completions if none found
		return [hits, line];
	}
}

module.exports = BaseDomain;
