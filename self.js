console.log('starting self.js');
var notes = require('./own.js');
const yargs = require('yargs');
const argv = yargs.argv;
notes.addNotes(argv.title,argv.body);
//notes.remove(argv.title);
//console.log(notes.fetchNotes());