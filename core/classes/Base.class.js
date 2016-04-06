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

	addMonster( monster ) {
		this.d.monsters.push( monster );
		return true;
	}

	getMonsters() {
		return this.d.monsters;
	}

	getMonster( needle ) {
		var monsters = this.d.monsters;
		var result;
		for (var i = monsters.length - 1; i >= 0; i--) {
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
		if (team != null) {
			return 'Invalid team';
		}
		this.d.activeteams.push( team );
	}
}

module.exports = Base;
