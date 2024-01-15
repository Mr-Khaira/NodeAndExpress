// Synchronous - Processes happens one by one in an order.
// Asynchronous - Processes happen indenpendently of each other.

const { resolve } = require("path");

/*
console.log("I have been training myself, and ..");

setTimeout(() => {
  console.log("After Some time, I have achived that state.");
}, 1000);

function getCheese() {
  setTimeout(() => {
    const cheese = "🧀";
    return cheese;
  }, 2000);
}
*/
// console.log(getCheese()); // So, this line will be returned "undefined", hence, to prevent that we will be return a promise.

/* To create a promise we use a promise constructor, to do so. */

// resolve and reject, themselves are funcitons(callBack functions) as well.
// Only one data can be passed inside the resolve(data) and reject(data).
let ticket = new Promise((resolve, reject) => {
  let boarded = true;
  if (boarded) {
    resolve("The flight has been boarded."); // Whatever is passed inside the reslove, is what goes inside the .then(), as  it's parameter.
  } else {
    reject("The flight has been cancled."); // reject param data will be paeed in the cath() caluse.
  }
});

ticket
  .then((data) => {
    console.log(data); // The data was 'The flight has been boarded.'
  })
  .catch((data) => {
    console.log(data);
  })
  .finally((data) => {
    console.log("Has been called rregerdless, resolve or reject, ", data);
    // The data will be undefined, because the finally does not recieve anything.
  });
