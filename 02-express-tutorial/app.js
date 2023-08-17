const express = require("express");
const app = express();

const peoplesRouter = require("./routes/people");
const authRouter = require("./routes/auth");

//static assets
app.use(express.static("./methods-public"));

// parse from data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/people", peoplesRouter);
app.use("/login", authRouter);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
