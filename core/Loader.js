'use strict';

const fs = require('fs');

const Base = require('./classes/Base.class.js');
const BaseDomain = require('./domains/BaseDomain.class.js');
const Dungeon = require('./classes/Dungeon.class.js');
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

function loadDungeons( json ) {
	var result = [];
	json.dungeons.forEach( function(dungeon) {
		result.push( new Dungeon( dungeon ) );
	});
	return result;
}

c.loadWorld = function( dir ) {
	var world = {};

	var contents;
	var jsonContent;

	// Get content from file
	contents = fs.readFileSync( dir + "monsterclasses.json" );
	// Define to JSON type
	jsonContent = JSON.parse(contents);
	world.monsterclasses = loadMonsterClasses( jsonContent );

	// Get content from file
	contents = fs.readFileSync( dir + "dungeons.json" );
	// Define to JSON type
	jsonContent = JSON.parse(contents);
	world.dungeons = loadDungeons( jsonContent );

	return world;
}

module.exports = c;
