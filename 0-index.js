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
