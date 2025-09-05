const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const usersRouter = require("./routes/users.router");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to rest api app",
  });
});

app.use("/api/v1/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
