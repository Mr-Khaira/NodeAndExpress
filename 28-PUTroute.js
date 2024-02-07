const express = require("express");
const app = express();

let { people } = require("./Utilities/sampleDataExProducts");

app.use(express.static(__dirname));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.listen(8080, () => {
  console.log("At server 8080");
});
