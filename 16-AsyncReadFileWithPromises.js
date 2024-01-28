const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  const textHolder = await readFile("./Fundamentals-P1/first.txt", "utf-8");
  console.log(textHolder);
  await writeFile("./Fundamentals-P1/first.txt", "Jai SiaRam Jai SiaRam", {
    flag: "a",
  });
};

start();
// This is the approch withh the util library :-
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   const textHolder = await readFilePromise(
//     "./Fundamentals-P1/first.txt",
//     "utf-8"
//   );
//   console.log(textHolder);
//   await writeFilePromise(
//     "./Fundamentals-P1/first.txt",
//     "The text to write is Jai SiaRam Jai SiaRam"
//   );
// };

// start();

//

//
// Normal method to create a function :-
// const getTextFunction = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const holdText = await getTextFunction("./Fundamentals-P1/first.txt");
//     console.log(holdText);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
