const { readFileSync, writeFileSync, readFile } = require("fs");

const first = readFileSync("./Fundamentals-P1/first.txt", "utf8");

console.log(first);

const newFile = writeFileSync(
  "./Fundamentals-P1/second.txt",
  `${first} Jai SiaRam Jai SiaRam`,
  { flag: "a" }
);

console.log("Done with this task.");
console.log("Starting the next task.");

// Sync :-
readFile("./Fundamentals-P1/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Inside the async readFile function.");
  }
});
