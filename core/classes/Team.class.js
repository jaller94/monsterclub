'use strict';

class Team {
	constructor( base ) {
		this.d = {};
		this.d.base = base;
		this.d.monsters = [];
		this.d.status = 'planing';
		this.d.dungeon = null;
	}

	json() {
		return this.d;
	}

	addMonster( monster ) {
		var monsters = this.d.monsters;

		if (monsters.length >= 4) {
			return 'Team already full';
		}
		if (!monster.setTeam( this )) {
			return 'Monster occupied';
		}

		monsters.push( monster );
		return true;
	}

	dissolve() {
		this.d.monsters.forEach( function(monster) {
			monster.clearTeam();
		});
	}

	getMonsters() {
		return this.d.monsters;
	}

	getMonster( needle ) {
		const monsters = this.d.monsters;
		let result;
		for (let i = monsters.length - 1; i >= 0; i--) {
			if (monsters[i].getName() === needle) {
				result = monsters[i];
				break;
			}
		}
		return result;
	}

	getName() {
		return this.d.name;
	}

	setName( name ) {
		this.d.name = name;
	}
}

module.exports = Team;
