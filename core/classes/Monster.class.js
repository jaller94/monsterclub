'use strict';

const MonsterClass = require('./MonsterClass.class.js');

class Monster {
	constructor( ) {
		this.d = {};
	}

	static load( json ) {
		var monster = new Monster();
		this.d = json;
		return monster;
	}

	static generate( monsterclass, level ) {
		var monster = new Monster();
		monster.d.monsterclass = monsterclass;
		monster.d.level = level;
		return monster;
	}

	json() {
		return this.d;
	}

	getMonsterClass() {
		return this.d.monsterclass;
	}

	getName() {
		return this.d.name;
	}

	setName( name ) {
		this.d.name = name;
	}
}

module.exports = Monster;
