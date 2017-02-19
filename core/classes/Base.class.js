'use strict';

class Base {
	constructor() {
		this.d = {};
		this.d.monsters = [];
		this.d.activeteams = [];
	}

	json() {
		return this.d;
	}

	act( steps ) {
		const x = parseInt(steps, 10);
		for (let i = x - 1; i >= 0; i--) {
			this.act_single();
		}
	}

	act_single() {
		//TODO Write code
		console.log( 'Step' );
	}

	addMonster( monster ) {
		this.d.monsters.push( monster );
		return true;
	}

	getActiveTeams() {
		return this.d.activeteams;
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

	send( team ) {
		if (!team) {
			return 'Invalid team';
		}
		this.d.activeteams.push( team );
	}
}

module.exports = Base;
