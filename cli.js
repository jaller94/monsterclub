'use strict';

const Base = require('./classes/Base.class.js');
const BaseDomain = require('./domains/BaseDomain.class.js');

const readline = require('readline');

function completer(linePartial, callback) {
	var completions = 'name ,base name ,go base ,go areals '.split(',');
	if (linePartial == 'b') {
		var completions = 'base name '.split(',');
	}
	var hits = completions.filter((c) => { return c.indexOf(linePartial) == 0 });
	// show all completions if none found
	callback(null, [completions, linePartial]);
}

const rl = readline.createInterface(process.stdin, process.stdout, completer);

var root = {};
root.bases = [];
var base = new Base();

base.setName('Paul Base');


var domain = 'Base';
rl.setPrompt(domain + '> ');
rl.prompt();

var domain = 'Base';

rl.on('line', (line) => {
	line = line.trim();
	if (domain == "Base") {
		var basedomain = new BaseDomain( base );
		basedomain.process( line );
	}
	switch(line.trim()) {
		case 'base name':
			console.log( base.getName() );
			break;
		case 'go base':
			domain = 'Yep';
			rl.setPrompt(domain + '> ');
		case 'go areals':
			domain = 'Areals';
			rl.setPrompt(domain + '> ');
		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			break;
	}
	rl.prompt();
}).on('close', () => {
	console.log('Have a great day!');
	process.exit(0);
});