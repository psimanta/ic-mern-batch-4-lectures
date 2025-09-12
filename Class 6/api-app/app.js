const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { swaggerServe, swaggerSetup } = require("./middlewares/doc");
const usersRouter = require("./routes/users.router");
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

app.use("/api-docs", swaggerServe, swaggerSetup);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
