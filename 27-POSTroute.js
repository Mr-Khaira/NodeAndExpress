const express = require("express");
const app = express();

let { people } = require("./Utilities/sampleDataExProducts");

app.use(express.static(__dirname));

/*
The post will be received here, from the form as <form class="d-flex" action="/login" method="post">, and the form data will be submitted to the "currentURL/login".

Whatever we set as the name is the key, for the value of the form data, in the input attribute.

*/

// In order to get access to the form data we are going to use a express built in middleware named urlencoded().

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // This will allow us to access the form data, in the req body.

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { login } = req.body;
  console.log(login);
  if (!login) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a login." });
  }
  res.status(201).send({ success: true, person: login });
});

// In this code, { name } = req.body; uses object destructuring to extract the name field from the req.body object directly. This means that name will only contain the value of the name field from the submitted form data. If the name field is present in the form data, it will be assigned to the variable name; otherwise, name will be undefined.

app.post("/login", (req, res) => {
  console.log(req.body);
  const { login } = req.body;

  if (login) {
    return res.status(200).send(`Welcome ${login}`);
    //.send("Welcome ", login); Invalid.
  }
  res.status(401).send("Please enter credentials");
});

app.listen(8080, () => {
  console.log("At server 8080");
});
