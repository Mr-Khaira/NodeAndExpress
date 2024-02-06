// we put 'async' keyword in front of the function, and then we can male the code inside of the function wait until certain conditions are met, using the await keyword.

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
      // reject("Bad dough");
      console.log("the pizza,", pizza);
      resolve(pizza);
    }, 2000);
  });
}
async function orderPizza() {
  try {
    let cheese = await getCheese();
    let dough = await makeDough(cheese);
    await makePizza(dough);
  } catch (error) {
    console.log("The reject part will appere as an error.", error);
  }
}

orderPizza();
