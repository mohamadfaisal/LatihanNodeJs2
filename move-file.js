//////////////////////////////////////////////////
// Nama file: move-file.js
//////////////////////////////////////////////////

var fs = require('fs');

var sumber = './databaru.txt';
var tujuan = './newdir/databaru.txt';

fs.rename(sumber, tujuan, function (err) {
   if (err) console.error(err);
});
