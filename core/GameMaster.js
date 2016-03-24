'use strict';

const Base = require('./classes/Base.class.js');
const BaseDomain = require('./domains/BaseDomain.class.js');
const Monster = require('./classes/Monster.class.js');
const MonsterClass = require('./classes/MonsterClass.class.js');

const Loader = require('./Loader.js');

var world = Loader.loadWorld('world/');

var root = {};
root.bases = [];
var base = new Base();

//TODO This should be loaded from a save.
base.setName('Paul Base');

var c = {};

//TODO Set another default
c.domain = 'Base';

c.completer = function(linePartial, callback) {
	var completions = 'name ,base name ,go base ,go areals ,debug monsterclasses ,debug dungeons ,recruit bulbasaur ,recruit pidgey ,monsters ,base monsters'.split(',');
	var hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	// show all completions if none found
	callback(null, [hits.length ? hits : completions, linePartial]);
}

c.onLine = function(line) {
	line = line.trim();
	if (c.domain == 'Base') {
		var basedomain = new BaseDomain( base );
		basedomain.process( line );
	}
	switch(line.trim()) {
		case 'base name':
			console.log( base.getName() );
			break;
		case 'go':
			console.log('Go where?');
		case 'go base':
			c.domain = 'Base';
			break;
		case 'go areals':
			c.domain = 'Areals';
			break;
		case 'debug dungeons':
			console.log( world.dungeons );
			break;
		case 'debug monsterclasses':
			console.log( world.monsterclasses );
			break;
		case 'recruit bulbasaur':
			var bulbasaurClass = world.monsterclasses[0];
			var monster = Monster.generate( bulbasaurClass, 5 );
			monster.setName( 'Bisa' );
			base.addMonster( monster );
			break;
		case 'recruit pidgey':
			var bulbasaurClass = world.monsterclasses[1];
			var monster = Monster.generate( bulbasaurClass, 3 );
			monster.setName( 'Taubs' );
			base.addMonster( monster );
			break;
		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			break;
	}
}

module.exports = c;
