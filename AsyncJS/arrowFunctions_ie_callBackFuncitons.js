"use strict";

// fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>
//   console.log(response)
// );

const anArrowFunction = () => {
  console.log("This is an arrow function, but stored in a variable.");
};

const expressionArrowFunction = (x, y) => x ** y; // returns automatically.

// But in case of {}, we have to write return.
// Example -

const anotherArrowFunction = () => {
  return 2;
};

console.log(anotherArrowFunction());

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => response.json())
//   .then((value) => console.log(value));
