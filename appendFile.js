//////////////////////////////////////////////////
// Nama file: appendFile.js
//////////////////////////////////////////////////

var fs = require('fs');

// data yang akan ditulis ke dalam file
var data = `C++
Java
Kotlin
C#`;

// menambah data ke dalam file data.txt
fs.appendFile('./data.txt', data, function (err) {
   if (err) console.error(err);
   console.log('Proses penambahan data ke data.txt sukses');
});
