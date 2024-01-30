//////////////////////////////////////////////////
// Nama file: readFile.js
//////////////////////////////////////////////////

var fs = require('fs');

// membaca data dari dalam file
fs.readFile('./data.txt', function (err, data) {
   if (err) console.error(err);
   console.log(data.toString());
});
