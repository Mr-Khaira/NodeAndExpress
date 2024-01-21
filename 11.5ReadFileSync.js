// Syncronous - blocking, Asyncronous - nonBlocking
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Fundamentals-P1/first.txt", "utf8");

console.log(first);

const newFile = writeFileSync(
  "./Fundamentals-P1/second.txt",
  `${first} Jai SiaRam Jai SiaRam`,
  { flag: "a" }
);
// WriteFileSync over writes the file content, if we want to append we have to pass one more argument, that would be -{flag: "a"}
