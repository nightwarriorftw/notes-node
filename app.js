console.log("Starting app");
const fs = require("fs"); //loading the file system module with the help of 'require()'
const os = require("os");
const mod = require("./notes.js");
const _ = require("lodash");
var user = os.userInfo();

console.log(_.isString('aman'));




// let sum = mod.add(10, 20);
// fs.appendFile(
//   "greeting.txt",
//   `Hello ${user.username}! and your age is ${mod.age} and the sum is ${sum}`,
//   function(err) {
//     if (err) {
//       console.log("Unable to right to file");
//     }
//   }
// );
