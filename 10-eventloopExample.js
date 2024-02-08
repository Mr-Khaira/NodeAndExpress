const { readFile, readFileSync } = require("fs");

console.log("The task before the async(non blocking) readFile.");

readFile("./Fundamentals-P1/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Inside the async readFile function.");
  }
});

console.log("Completely outside, even after the async readFile.");

console.log("Now doing thr same with the sync(blocking)");

readFile("./Fundamentals-P1/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Inside the Sync readFileSync function.");
  }
});

console.log("At the very end, even after the Sync function");

/*

Asynchronous (readFile):

    The readFile function is asynchronous and non-blocking. It means that when you call 
    readFile, it initiates the file reading operation and then moves on to the next line 
    of code without waiting for the file reading to complete.

    The provided callback function is executed once the file reading operation is 
    finished. In the meantime, the rest of your code continues to execute, and the event 
    loop remains unblocked.

Synchronous (readFileSync):

    The readFileSync function, on the other hand, is synchronous and blocking. When you 
    call readFileSync, it blocks the execution of the code until the file reading 
    operation is complete. Only after the operation finishes does it move on to the next 
    line of code.

    Because it's synchronous, it can potentially block the event loop, especially in 
    scenarios where the file operation takes a significant amount of time.

*/
