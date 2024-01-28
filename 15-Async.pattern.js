const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    // for (let i = 0; i < 1000; i++) {
    //   for (let h = 0; h < 1000; h++) {
    //     console.log("Hahaha");
    //   }
    // }
    res.end("About page");
  } else {
    res.end("Error page");
  }
});

// The blocking code above will not only block the user who navigates to the about page, but all the users of our website.

server.listen(5000, () => {
  console.log("Listening at 5000");
});
