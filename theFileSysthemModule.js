const { readFileSync, writeFileSync } = require("fs"); // same as variable.readFileSync() .
const theFile = readFileSync("./Fundamentals-P1/first.txt", "utf8");

console.log(theFile);

const ramNam = "Jai ram ram jai jai ram";
writeFileSync("./Fundamentals-P1/ThisIsAFile.txt", ramNam);
