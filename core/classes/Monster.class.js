'use strict';

const MonsterClass = require('./MonsterClass.class.js');

class Monster {
	constructor( ) {
		this.d = {};
	}

	static load( json ) {
		const monster = new Monster();
		this.d = json;
		return monster;
	}

	static generate( monsterclass, level ) {
		const monster = new Monster();
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

	setTeam( team ) {
		if (this.d.team != null) {
			return 'Already belongs to a team';
		}

		this.d.team = team;
		return true;
	}

	clearTeam() {
		this.d.team = null;
		return true;
	}
}

module.exports = Monster;
