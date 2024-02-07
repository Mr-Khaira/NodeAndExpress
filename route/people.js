const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPeople,
  putPeople,
  deletePerson,
} = require("../controllers/people");
// This / is the base case for the routes here, ie equal to /api/people.

router.get("/", getPeople); //---
//                               |-----router.route('/').get(getPeople).post(postPeople);
router.post("/", postPeople); //-

router.put("/:id", putPeople);
//                           |---router.route('/:id').put(putPeople).delete(deletePerson)
router.delete("/:id", deletePerson);

// // This / is the base case for the routes here, ie equal to /api/people.
// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   const { login } = req.body;
//   console.log(login);
//   if (!login) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Please provide a login." });
//   }
//   res.status(201).send({ success: true, person: login });
// });

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   // const target = people.find((pep1) => pep1.id == id);
//   const target = people.find((pep1) => pep1.id === Number(id));

//   if (!target) {
//     res.status(404).send({ successs: false, msg: "Please enter credentials" });
//   }
//   const newPerson = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name;
//     }
//     return person;
//   });
//   res.status(200).json({ success: true, data: newPerson });
// });

// router.delete("/:id", (req, res) => {
//   const person = people.find((pep1) => pep1.id === Number(req.params.id));
//   if (!person) {
//     res.status(404).send({ successs: false, msg: "No valid person" });
//   }
//   const newPerson = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   );
//   res.status(200).json({ success: true, data: newPerson });
// });

module.exports = router;
