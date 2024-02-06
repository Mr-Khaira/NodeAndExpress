// In any URL(api) after the question mark are the query parameters.
const express = require("express");
const app = express();
const path = require("path");
const logger = require("./Utilities/middlewareFunctions");

app.use(logger); // This is how we implement a mdw to all the routes that there are.

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
