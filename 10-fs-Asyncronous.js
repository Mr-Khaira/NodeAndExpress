const { readFile, writeFile } = require("fs");

readFile("./Fundamentals-P1/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const firstAsync = result;
  readFile("./Fundamentals-P1/ThisIsAFile.txt", "utf8", (err, result) => {
    const second = result;
    writeFile(
      "./Fundamentals-P1/newFileAsync.txt",
      `Combined ${firstAsync}, ${second}`,
      (err, result) => {
        console.log(result);
      }
    );
  });
});

// flag is possible similarly.
