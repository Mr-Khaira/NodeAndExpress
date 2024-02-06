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

async function cookPizza() {
  try {
    console.log("Making the pizza in the aswncawait block.");
    const cheese = await getCheese();
    const dough = await makeDough(cheese);
    const myPizza = await makePizza(dough);
    console.log(myPizza);
  } catch (error) {
    console.log(error);
  }
}

cookPizza();

// getCheese()
//   .then((cheese) => {
//     return makeDough(cheese); // we are returning the promise of the make dough here.
//   })
//   .then((dough) => {
//     return makePizza(dough);
//   })
//   .catch((data) => {
//     console.log("cathc is enough one time.");
//   });

// // getCheese().then((cheese) => {
// //   makeDough(cheese).then((dough) => {
// //     makePizza(dough);
// //   });
// // });

// // Wrong method of calling a promise baesd function :-
// // getCheese.then((data) => {
// //   console.log(data);
// // });
