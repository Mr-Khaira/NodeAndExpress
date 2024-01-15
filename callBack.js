// A callback is a funciton passed as an argument to another function.

const calculation = (a, b, operation) => {
  return operation(a, b);
};

// const operation = (n1, n2) => {
//   return n1 + n2;
// };

const result = calculation(5, 6, (n1, n2) => {
  return n1 + n2;
});

function addition(a, b) {
  return a + b;
}

calculation(9, 8, addition); // putting brackets after addition will call the function, tp pass it just write the name of the function.

// So practically it is used at event handling.
// And some array function as, .find(functionHere), .findIndex(functionHere) etc.
// Aslo in forEach().

console.log(result);
