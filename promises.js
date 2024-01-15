function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      console.log("Here is the cheese.");
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dough = cheese + "🍞";
      console.log("the dough,", dough);
      resolve(dough);
    }, 2000);
  });
}

function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pizza = dough + "🍕";
      console.log("the pizza,", pizza);
      resolve(pizza);
    }, 2000);
  });
}

getCheese()
  .then((cheese) => {
    return makeDough(cheese); // we are returning the proise of the make dough here.
  })
  .then((dough) => {
    return makePizza(dough);
  })
  .catch((data) => {
    console.log("cathc is enough one time.");
  });

// getCheese().then((cheese) => {
//   makeDough(cheese).then((dough) => {
//     makePizza(dough);
//   });
// });

// Wrong method of calling a promise baesd function :-
// getCheese.then((data) => {
//   console.log(data);
// });
