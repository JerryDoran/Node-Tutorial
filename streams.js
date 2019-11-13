const fs = require("fs");
const http = require("http");
const zlib = require("zlib");

// const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example/example2.text.gz');

// const readStream = fs.createReadStream(
//   __dirname + "/static/example.txt",
//   "utf8"
// );
// const writeStream = fs.createWriteStream(__dirname + "/static/example2.text");
// const writeStream = fs.createWriteStream('./example/example2.text.gz');
// const writeStream = fs.createWriteStream('./example/uncompressed.text');

// Each time the readStream event takes in data which is an event listener
// the callback function will execute with the chunk of data read in.
// readStream.on("data", chunk => {
//   console.log("new chunk received");
//   writeStream.write(chunk);
// });

// PIPES - REPLACES ABOVE CODE
// readStream.pipe(writeStream);

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const readStream = fs.createReadStream(
//       __dirname + "/static/main.html",
//       "utf8"
//     );
//     readStream.pipe(res);
//   } else {
//     res.write("using some other domain");
//     res.end();
//   }
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let myObj = {
      name: "Tony",
      job: "Tech Billionaire",
      age: 40
    };
    res.end(JSON.stringify(myObj));
  } else {
    res.write("using some other domain");
    res.end();
  }
});

PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// TRANSFORM STREAM TO COMPRESS DATA
// readStream.pipe(gunzip).pipe(writeStream);
