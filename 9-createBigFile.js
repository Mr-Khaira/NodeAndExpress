const { writeFileSync } = require("fs");

/*
for (let i = 0; i < 10000; i++) {
  writeFile("./Fundamentals-P1/myBigFile.txt", `Jai SiaRam${i}\n`, {
    flag: "a",
  });
}

The issue with the code is that we are using a loop to asynchronously write to a file 
inside each iteration. However, the loop doesn't wait for the asynchronous writeFile 
operation to complete before moving on to the next iteration. This can lead to 
unexpected behavior.
*/

for (let i = 0; i < 10000; i++) {
  writeFileSync("./Fundamentals-P1/myBigFile.txt", `Jai SiaRam${i}\n`, {
    flag: "a",
  });
}
