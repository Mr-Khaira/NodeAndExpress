const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to the home page.");
  } else if (request.url === "/about") {
    response.end("About us");
  } else {
    response.end(`<h2>Cant Seem to find the page</h2><br><a href="/">`);
  }
});

server.listen(5000);
