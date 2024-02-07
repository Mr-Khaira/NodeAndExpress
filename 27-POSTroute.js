const express = require("express");
const app = express();

let { people } = require("./Utilities/sampleDataExProducts");

/*
The post will be received here, from the form as <form class="d-flex" action="/login" method="post">, and the form data will be submitted to the "currentURL/login".

Whatever we set as the name is the key, for the value of the form data, in the input attribute.

*/
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(8080, () => {
  console.log("At server 8080");
});
