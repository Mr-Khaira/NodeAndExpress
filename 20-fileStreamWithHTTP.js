const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const fileStream = fs.createReadStream(
    "./Fundamentals-P1/myBigFile.txt",
    "utf-8"
  );
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    console.log(err);
  });
});

server.listen(5000);

/*
Not only will the data be read in chuncks, but also be send in chuncks, so that it can 
be send easily, this is done by fileStream.pipe() .
*/
