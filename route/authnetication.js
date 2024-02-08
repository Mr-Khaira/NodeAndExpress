// express Router is used to group the routes together, in the file where these functions
// have been imported, and been set as a middleware using the express function use(),
// there a specific route path has been given as well which will be by default for any
// of these routes below.

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
