const logger = (req, res, next) => {
  const method = req.method;
  const time = new Date().getTime();
  // res.send("Teastinf wahterver"); If we intend to not send the response here, then we must pass it on to the route by using the next() function provided by express.
  console.log("Logger Middleware implemented.");
  next();
};

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "John") {
    req.user = { name: "John", id: 4 };
    next();
  } else {
    res.status(401).send("Unauthinrdzed");
  }
};

module.exports = [logger, authorize];
