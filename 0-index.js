const express = require("express");
const app = express();

let { people } = require("./Utilities/sampleDataExProducts");

app.use(express.static(__dirname));

// In order to get access to the form data we are going to use a express built in middleware named urlencoded().

app.use(express.urlencoded({ extended: false })); // This will allow us to access the form data, in the req body.

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("This is a response.");
});

app.listen(8080, () => {
  console.log("At server 8080");
});
