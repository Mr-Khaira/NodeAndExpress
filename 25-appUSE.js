// In any URL(api) after the question mark are the query parameters.
const express = require("express");
const app = express();
const path = require("path");
const { logger, authorize } = require("./Utilities/middlewareFunctions");

app.use(logger); // This is how we implement a mdw to all the routes that there are.
// Furthermore, the order matters, if this line was palced after the first route, then the mdw would not be added automatically.

app.use("/api", logger);
// This mdw will be applied to any route that is an extension of /api/home.
// Be it /api/home or /api/product etc.

app.use([logger, authorize]); //These are executed in the same order as they are placed here.

app.get("/", logger, (req, res) => {
  res.status(200).send("Home page");
});

app.listen(8080, [logger, authorize], () => {
  console.log("At server 8080");
});
