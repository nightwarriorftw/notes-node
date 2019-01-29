console.log('starting own.js');
const fs = require('fs');
var addNotes = (title,body) => {
	try {
		var notes = [];
		var note = {
			title,
			body
		};
		notes.push(note);
		fs.appendFile('save-data.json',JSON.stringify(notes),(err) => {
			if(err) throw err;
		});
		console.log('data saved');
	}
	catch (e) {
		return [];
	}

};

// var fetchNotes = () => {
// 	var notes = fs.readFile('./save-data.json', (err) => {
// 		if(err) throw err;
// 	});
// 	var notes = JSON.parse(notes);
// 	 return notes;
// };

// var remove = (title) => {
// 	var notes = fetchNotes();
// 	var remain = notes.filter(note => note.title != title);
// 	fs.writeFile('save-data.json',remain, (err) => {
// 		if(err) throw err;
// 	});
// 	console.log('data removed and saved');
// };
module.exports = {
	addNotes,
};