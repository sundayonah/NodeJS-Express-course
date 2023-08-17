const express = require("express");
const logger = require("./logger");

const app = express();

//req => middleware => res
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
