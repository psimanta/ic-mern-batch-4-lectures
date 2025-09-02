const express = require("express");
const app = express();

// app.use(express.json());
// app.use(express.static());
// app.use(express.urlencoded());

const booksRouter = require("./routes/books.routes");
const teachersRouter = require("./routes/teachers.routes");

const PORT = 8080;

// app.use((req, res, next) => {
//   console.log("I am middleware 1!");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("I am middleware 2!");
//   return res.send("Terminated from middleware 2");
//   next();
// });

// book, student, teacher, users
app.get("/", (req, res) => {
  res.send("Home page!");
});

app.use("/api/teachers", teachersRouter);
app.use("/api/books", booksRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}!`);
});
