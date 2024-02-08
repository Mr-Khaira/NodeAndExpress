let { people } = require("../Utilities/sampleDataExProducts");

/*Here we have stored our functions in a js file, these are the dunctions that 
are used in the routes, hence they have been exposred.
*/

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeople = (req, res) => {
  console.log(req.body);
  const { login } = req.body;
  console.log(login);
  if (!login) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a login." });
  }
  res.status(201).send({ success: true, person: login });
};

const putPeople = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const person = people.find((pep1) => pep1.id === Number(req.params.id));
  if (!person) {
    res.status(404).send({ successs: false, msg: "No valid person" });
  }
  const newPerson = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPerson });
};

module.exports = { getPeople, postPeople, putPeople, deletePerson };
