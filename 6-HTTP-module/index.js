const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page!");
  }
  if (req.url === "/about") {
    res.end("Welcome to the about page!");
  }
  if (req.url === "/contact") {
    res.end("Welcome to the contact page!");
  }
  res.end(`
    <h1>Page Not Found</h1>
    <a href="/">Home</a>`);
});

server.listen(4000);
