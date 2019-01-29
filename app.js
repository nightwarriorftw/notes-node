console.log('Stating app.js');
const yargs = require('yargs');
const argv = yargs.command('add','Add to note',{
title: {
		describe: 'Title of note',
		demand: true,
		alias: 't'
	},
body: {
	describe:'body of title',
	demand: true,
	alias: 'b'
}
})
.command('list','list all notes')
.command('read','read al notes',{
	title:{
		describe: 'title of reading notes',
		demand: true,
		alias: 't'
	},
	body:{
		describe: 'body of reading note',
		demand: false,
		alias: 'b'
	}
})
.help()
.argv;
var con = process.argv[2];
console.log('command',process.argv);
console.log(con)
console.log(argv);
var notes = require('./notes.js');
notes.addNotes(argv.title,argv.body);
notes.getAll();   
