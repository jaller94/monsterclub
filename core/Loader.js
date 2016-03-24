'use strict';

const fs = require('fs');

const Base = require('./classes/Base.class.js');
const BaseDomain = require('./domains/BaseDomain.class.js');
const Monster = require('./classes/Monster.class.js');
const MonsterClass = require('./classes/MonsterClass.class.js');

var c = {};

function loadMonsterClasses( json ) {
	var result = [];
	json.monsterclasses.forEach( function(monsterclass) {
		result.push( new MonsterClass( monsterclass ) );
	});
	return result;
}

c.loadWorld = function( dir ) {
	var world = {};
	// Get content from file
	var contents = fs.readFileSync( dir + "monsterclasses.json" );
	// Define to JSON type
	var jsonContent = JSON.parse(contents);
	world.monsterclasses = loadMonsterClasses( jsonContent );
	return world;
}

module.exports = c;
