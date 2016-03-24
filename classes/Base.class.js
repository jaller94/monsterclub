'use strict';

class Base {
	constructor() {
		this.d = {};
	}

	json() {
		return this.d;
	}

	getName() {
		return this.d.name;
	}

	setName(name) {
		this.d.name = name;
	}
}

module.exports = Base;
