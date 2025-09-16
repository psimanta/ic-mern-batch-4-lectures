const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Mongodb connected successfully!"))
  .catch((err) => {
    console.error(err);
  });

const { swaggerServe, swaggerSetup } = require("./middlewares/doc");

const { usersRouter, booksRouter } = require("./routes");

const applyMiddlewares = require("./middlewares/app.middlewares");

const app = express();
const PORT = process.env.PORT || 8080;

applyMiddlewares(app);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to rest api app",
  });
});

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/books", booksRouter);

app.use("/api-docs", swaggerServe, swaggerSetup);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app => mongodb client
// app => mongoose(mongodb client)
