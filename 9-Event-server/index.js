const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("welcome!");
  }
  res.end("404 Not found");
});

server.listen(5000);
