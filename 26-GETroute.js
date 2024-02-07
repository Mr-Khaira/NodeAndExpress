const express = require("express");
const app = express();

let { people } = require("./Utilities/sampleDataExProducts");

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// GET, has been coverd well in the prevoius notes also,hence, only this much.

app.listen(8080, () => {
  console.log("At server 8080");
});
