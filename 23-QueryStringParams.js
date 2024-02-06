// In any URL(api) after the question mark are the query parameters.
const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./Utilities/sampleDataExProducts");

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query); // Based on the value of these parameters we are going to perform some actions.
//   const { search, limit } = req.query;
//   let storedProduct = [...products];
//   if (search) {
//     storedProduct = storedProduct.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     storedProduct = storedProduct.slice(0, Number(limit));
//   }
//   res.send(storedProduct);
// });

app.get("/api/v1/query", (req, res) => {
  ///console.log(req.query);
  const { search, limit } = req.query;
  let storedProduct = [...products];
  if (search) {
    storedProduct = storedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    storedProduct = storedProduct.slice(0, Number(limit));
  }
  if (storedProduct < 1) {
    //res.status(200).json("No products");
    return res.status(200).json({ success: true, data: [] }); // The more common way for showing that no dat was found.

    // In, js here if we do not add the return, then this function would have 2 return statements, which will cause an error, hence add a return statement while using if statements.
  }
  res.status(200).json(storedProduct);
});

app.listen(8080, () => {
  console.log("At server 5000");
});
