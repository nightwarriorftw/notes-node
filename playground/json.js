// // // var replacer = (key,value) => {
// // // 	if(typeof value === 'string'){
// // // 		return undefined;
// // // 	}
// // // 	return value;
// // // };

// // // var foo = { name: 'Mozilla', rank: 1};
// // // console.log(JSON.stringify(foo,replacer));


// // var obj = {
// // 	name: 'Andrew'
// // };
// // var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj); 

// var personalString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personalString);
// console.log(typeof person,typeof person.name,person.name);
// console.log(typeof person.age,person.age);

const fs = require('fs');
var notesObj = {
	name: 'Mozilla',
	age: 25
};
// Converting the object into the string and writing into file
var notesObjString = JSON.stringify(notesObj);
fs.writeFileSync('notes.json',notesObjString);

// Converting a json back to object after reading
var notesObjStringRevision = fs.readFileSync('notes.json');
var notesObjRevision = JSON.parse(notesObjStringRevision);
console.log('process done');