console.log('Starting notes.js');
var addNotes = (title,body) => {
	console.log('title',title);
	console.log('body',body);
};
var getAll = () => {
	console.log("Hey");
};
module.exports = {
	addNotes,
	getAll
// This is identical to addNotes: addNotes
};
