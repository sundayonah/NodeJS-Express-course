const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Resources Not Found");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

//app.get =>
//app.post
//app.put
//app.delete
//app.all
//app.use => responsible for middlewares
//app.listen
