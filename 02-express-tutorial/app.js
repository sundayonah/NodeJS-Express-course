const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page!</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});

app.get("/api/v1querry", (req, res) => {
  console.log(req.query);
  // const { search, limit } = req.query;
  // let sortedProducts = [...products];

  // if (search) {
  //   sortedProducts = sortedProducts.filter((product) => {
  //     return product.name.startsWith(search);
  //   });
  // }

  // if (limit) {
  //   sortedProducts = sortedProducts.slice(0, Number(limit));
  // }
  // res.status(200).json(sortedProducts);
  res.send("Hello World!");
});

app.get();

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
