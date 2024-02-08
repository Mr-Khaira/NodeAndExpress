const http = require("http");

const server = http.createServer();

// server.listen(5000, () => {
//   console.log("Server at 5000");
// });

server.on("request", (req, res) => {
  res.end("On server 5000");
});

server.on("listening", () => {
  console.log("On 5000");
});
server.listen(5000);

/*
So the class server of http.server() (actually extending the event emmiter class) has a 
event named 'request' and it also has the eventEmitter 'on', so we can setup 'on' for it.
*/
