console.log('Stating app.js');
const yargs = require('yargs');
const argv = yargs.argv;
var con = process.argv[2];
console.log('command',process.argv);
console.log(con)
console.log(argv);
var notes = require('./notes.js');
notes.addNotes(argv.title,argv.body);
notes.getAll();   
