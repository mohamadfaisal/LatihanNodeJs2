//////////////////////////////////////////////////
// Nama file: copy-file.js
//////////////////////////////////////////////////

var fs = require('fs');

// membuat objek stream untuk membaca data dari dalam file
var rs = fs.createReadStream('./data.txt');

// membuat objek stream untuk menulis data ke dalam file
var ws = fs.createWriteStream('./databaru.txt');

// menyalin file dari data.txt ke databaru.txt
rs.pipe(ws);
