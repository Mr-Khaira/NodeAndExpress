const express = require("express");
const app = express();

let { people } = require("./Utilities/sampleDataExProducts");

app.use(express.static(__dirname));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.post("/login", (req, res) => {
  console.log(req.body);
  const { login } = req.body;

  if (login) {
    return res.status(200).send(`Welcome ${login}`);
  }
  res.status(401).send("Please enter credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // const target = people.find((pep1) => pep1.id == id);
  const target = people.find((pep1) => pep1.id === Number(id));

  if (!target) {
    res.status(404).send({ successs: false, msg: "Please enter credentials" });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPerson });
});

// Most times put and delete are similar.

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((pep1) => pep1.id === Number(req.params.id));
  if (!person) {
    res.status(404).send({ successs: false, msg: "No valid person" });
  }
  const newPerson = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPerson });
});

app.listen(8080, () => {
  console.log("At server 8080");
});
