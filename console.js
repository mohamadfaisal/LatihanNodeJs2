//////////////////////////////////////////////////
// Nama file: console.js
//////////////////////////////////////////////////

console.info('Program mulai...');

console.time('Waktu eksekusi');

// proses yang akan diukur waktunya
for (let i=0; i<10000000; i++) {
   ; // tidak melakukan apa-apa
}

console.timeEnd('Waktu eksekusi');

console.info('Program selesai');
