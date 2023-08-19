require("dotenv").config();

// async error
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const productsRouter = require("./routes/products");

const notFoundMiddelware = require("./middleware/not-found");
const errorMiddelware = require("./middleware/error-handler");

// middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});
app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddelware);
app.use(errorMiddelware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // connectDB
    app.listen(port, console.log(`Server connect ON port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
