//////////////////////////////////////////////////
// Nama file: writeStream.js
//////////////////////////////////////////////////

var fs = require('fs');

// data yang akan ditulis ke dalam file
var data = `JavaScript
Python
Ruby
PHP`;

// membuat objek stream untuk penulisan data ke dalam file
var ws = fs.createWriteStream('./data.txt');

// menulis data ke dalam file melalui objek ws
ws.write(data, function () {
   console.log('File data.txt telah terbuat di direktori aktif');
});
