'use strict';

class Dungeon {
	constructor( data ) {
		this.d = data;
	}

	json() {
		return this.d;
	}

	getName() {
		return this.d['name-de'];
	}

	getFloors() {
		return this.d.floors;
	}
}

module.exports = Dungeon;
