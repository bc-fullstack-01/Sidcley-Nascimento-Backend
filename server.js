const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from Server");
    res.end();
  }
});

server.on("Connection", (stream) => {
  console.log("Some one connected");
});

server.listen(4000);
console.log("Server listen on http://localhost:4000");
