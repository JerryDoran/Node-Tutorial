const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World from Nodejs');
//     res.end('The response has ended');
//   } else {
//     res.write('using some other domain');
//     res.end();
//   }
// });

// SERVE UP STATIC FILES
const server = http.createServer((req, res) => {
  // Read static HTML file
  const readStream = fs.createReadStream("./static/index.html");
  res.writeHead(200, { "Content-type": "text/html" });

  // Read static text file
  // const readStream = fs.createReadStream('./static/example.txt', 'utf8');
  // readStream.on('data', chunk => {
  //   console.log('New chunk received');
  //   console.log(chunk);
  // });

  // Read JSON file
  // const readStream = fs.createReadStream('./static/states.json');
  // res.writeHead(200, { 'Content-type': 'application/json' });

  // Read image file
  // const readStream = fs.createReadStream('./static/cosmos.jpg');
  // res.writeHead(200, { 'Content-type': 'image/png' });

  readStream.pipe(res);
});

PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
