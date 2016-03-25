'use strict';

class c {
	constructor( root, base ) {
		this.root = root;
		this.base = base;
	}

	process( line ) {
		switch(line.trim()) {
			case 'base name':
				console.log( this.base.getName() );
				return 1;
			case 'recruit bulbasaur':
				var bulbasaurClass = world.monsterclasses[0];
				var monster = Monster.generate( bulbasaurClass, 5 );
				monster.setName( 'Bisa' );
				this.base.addMonster( monster );
				return 1;
			case 'recruit pidgey':
				var bulbasaurClass = world.monsterclasses[1];
				var monster = Monster.generate( bulbasaurClass, 3 );
				monster.setName( 'Taubs' );
				this.base.addMonster( monster );
				return 1;
		}
		return false;
	}
}

module.exports = c;
