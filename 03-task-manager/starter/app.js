const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandleMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

// app.get('/api/v1/tasks')         => get all the tasks
// app.post('/api/v1/tasks')        => create a new task
// app.get('/api/v1/tasks/:id')     => get single task
// app.patch('/api/v1/tasks/:id')   => update task
// app.delete('/api/v1/tasks/:id')  => delete single task

app.use(errorHandleMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error, "Error connecting DB");
  }
};

start();

// mongodb pwd =>  mZy1eYF3aLTzy7RV
//mongodb+srv://xhunteq:<password>@cluster0.vmgxy32.mongodb.net/?retryWrites=true&w=majority
