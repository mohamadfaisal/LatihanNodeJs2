//////////////////////////////////////////////////
// Nama file: readStream.js
//////////////////////////////////////////////////

var fs = require('fs');

// membuat objek stream untuk membaca data dari dalam file
var rs = fs.createReadStream('./data.txt');

// menulis data ke dalam file melalui objek ws
rs.on('data', function (data) {
   console.log(data.toString());
});
