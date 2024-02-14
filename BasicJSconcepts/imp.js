// Spread operator and destructuring

arr = [1, 2, 4, 45];

function avg(a, b, c) {
  return a + b + c / 3;
}

// 1st use case
//console.log(avg(...arr)); // will take the first 3 ele as the arguments.

// 2nd use case

let arr2 = [7, 8, 9, ...arr, 45];

let arr3 = [...arr, ...arr2];
console.log(arr2);

// 3rd usecase
obj1 = {
  name1: "jatra",
  class1: "8k",
  favLang: "Cpp",
};

let obj2 = { ...obj1, favLang: "Python" }; // This will take everything except the
//favLang value and change it to the one we gave.

// Destructuring :-

let { name1, calss1, favLang } = obj2; // vars must be same as in the object.

console.log(name1, calss1, favLang);

//Map, filter and reduce.

let array = arr.map((val) => {
  val + 3;
}); // Does something with each and every element of the array.
// This does not affect the original array.

let array2 = arr.filter((val) => {
  val > 3; // Will return each ele grt than 3.
});

let array3 = arr.reduce((val1, val2, val3) => {
  return val1 + val2 + val3;
});
// Reduces the whole arr to 1 value by taking the number of elements passed as the
//arguments that is the above example would take the first 3 values from the array.

console.log(array3);
