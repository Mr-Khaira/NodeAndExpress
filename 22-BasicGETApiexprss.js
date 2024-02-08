const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./data.js");

app.get("/", (req, res) => {
  //2. res.status(200).json(products);
  res
    .status(200)
    .send('<h1>Home page/h1><a href = "/api/products">products</a>');
  //1. res.status(200).json([{ name: "Harkaran Singh khaira", age: 20 }]);
});

app.get("/api/products", (req, res) => {
  const productsDisplay = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(productsDisplay);
});

/* 3. We also have something called as rout parameter, and it is needed because, for 
instance we want to access the oroduct with id 1 and so on, we are not going to set the
 route for each and every product, hanve we have a variable in the route api, we can 
 think of it as a placeholder. We find it as 'params' in the req body.
 
*/

app.get("/api/products/:prodID", (req, res) => {
  //console.log(req);
  const { prodID } = req.params;
  const singleProd = products.find((product) => product.id === Number(prodID));
  // might have to type cast it to Number, bec json is all string.
  if (!singleProd) {
    return res.status(404).send("Non existant product.");
  }
  res.json(singleProd);
});

app.listen(5000, () => {
  console.log("At server 5000");
});
