'use strict';

const gm = require('./core/GameMaster.js');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout, gm.completer);

rl.setPrompt(gm.domain + '> ');
rl.prompt();

var domain = 'Base';

rl.on('line', (line) => {
	gm.onLine(line);
	rl.setPrompt(gm.domain + '> ');
	rl.prompt();
}).on('close', () => {
	console.log('Have a great day!');
	process.exit(0);
});
