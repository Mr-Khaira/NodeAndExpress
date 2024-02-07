// express Router is used to group the routes together,

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { login } = req.body;

  if (login) {
    return res.status(200).send(`Welcome ${login}`);
  }
  res.status(401).send("Please enter credentials");
});

module.exports = router;
