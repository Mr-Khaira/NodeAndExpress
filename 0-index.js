// This is the base file for starting the server, everything in the other files was
// first implemented here and only then have been saved in a separate file for record.

const express = require("express");
const app = express();
const people = require("./route/people");
const login = require("./route/authnetication");
app.use(express.static(__dirname));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/people", people);
app.use("/login", login);

app.listen(8080, () => {
  console.log("At server 8080");
});
