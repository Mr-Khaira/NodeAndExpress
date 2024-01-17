// Every file in node is a module(module - the same encapsulated, as in the c++).
// All filse are by default a module in js.

// Whatever we share in the export, we would be able to access it anywhere in the application. LOOK AT namesForSayHi.js;
const sayHi = (name) => {
  console.log(`Hi, how are you ${name}`);
};

//sayHi("popoy");

module.exports = { sayHi };
