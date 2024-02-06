const names = require("./namesForSayHi"); // This will get what has been exported there.

//console.log(names); // This basically has the whole namesForSayHi hence, it wil lalso print the console.log(module); in there.
const theHiFunction = require("../2-modules");

console.log(names);

theHiFunction.sayHi(names.gulambha);
