const fs = require('fs');
const zlib = require('zlib');

// const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example/example2.text.gz');

// const readStream = fs.createReadStream('./example/example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example/example2.text');
// const writeStream = fs.createWriteStream('./example/example2.text.gz');
const writeStream = fs.createWriteStream('./example/uncompressed.text');

// Each time the readStream event takes in data which is an event listener the callback
// function will execute with the chunk of data read in.
// readStream.on('data', chunk => {
// console.log(chunk);
//   writeStream.write(chunk);
// });

// PIPES - REPLACES ABOVE CODE
// readStream.pipe(writeStream);

// TRANSFORM STREAM TO COMPRESS DATA
readStream.pipe(gunzip).pipe(writeStream);
