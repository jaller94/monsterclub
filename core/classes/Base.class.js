'use strict';

class Base {
	constructor() {
		this.d = {};
		this.d.monsters = [];
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

	getName() {
		return this.d.name;
	}

	setName( name ) {
		this.d.name = name;
	}
}

module.exports = Base;
