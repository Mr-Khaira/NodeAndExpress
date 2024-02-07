// In any URL(api) after the question mark are the query parameters.
const express = require("express");
const app = express();
const path = require("path");
const { logger, authorize } = require("./Utilities/middlewareFunctions");

app.use(express.static("/path/to/file")); // This static is a express built in middleware, used for rendring file acc to the path, this is an example of built in middleware.

express.static(root, [options]);
// root: This parameter specifies the root directory from which to serve static assets.
// options: This is an optional parameter that allows you to specify additional settings for serving static files, such as caching options, custom headers, etc.

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
