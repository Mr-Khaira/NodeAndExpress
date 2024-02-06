/*
express Middleware - Are functions that execute during the request to the server, each middleware function has access to all the req and res objects.

req => middleware => res.
*/

const express = require("express");
const app = express();
const logger = require("./Utilities/middlewareFunctions");

// express passes req, res and a next param to our mdw.
// While working with mdw, we must pass it on to the next mdw func, or terminate the whole cycle by sending back the response.

/*
const logger = (req, res, next) => {
  const method = req.method;
  const time = new Date().getTime();
  // res.send("Teastinf wahterver"); If we intend to not send the response here, then we must pass it on to the route by using the next() function provided by express.
  next();
};
*/

//______"api", middleware, (req,res) - putting mdw like this is called referencing.
app.get("/", logger, (req, res) => {
  res.status(200).send("Home page"); // This might not matter if we send response in the mdw function.
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.listen(8080, () => {
  console.log("At server 8080");
});
