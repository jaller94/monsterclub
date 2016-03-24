'use strict';

class MonsterClass {
	constructor( json ) {
		this.d = json;
	}

	json() {
		return this.d;
	}

	getName() {
		return this.d.name;
	}
}

module.exports = MonsterClass;
