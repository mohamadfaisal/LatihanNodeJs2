//////////////////////////////////////////////////
// Nama file: readFileSync.js
//////////////////////////////////////////////////

var fs = require('fs');

// membaca data dari dalam file
var data = fs.readFileSync('./data.txt');

console.log(data.toString());
