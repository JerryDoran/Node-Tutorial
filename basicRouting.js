const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/static/main.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/static/contact.html").pipe(res);
  } else if (req.url === "/api/user") {
    let users = [
      {
        name: "Jerry",
        age: 51,
        role: "Admin"
      },
      {
        name: "Steve",
        age: 150,
        role: "User"
      },
      {
        name: "Tony",
        age: 45,
        role: "Manager"
      }
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/static/404.html").pipe(res);
  }
});

PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
