const { readFile, writeFile } = require("fs");

readFile("./Fundamentals-P1/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Fundamentals-P1/ThisIsAFile.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
  });
});
