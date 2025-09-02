const express = require("express");
const app = express();

const PORT = 8080;

// Routing Http request
// Middleware configuration
// Rendering views (template engine)

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/users", (req, res) => {
  // middlewares
  res.json({
    users: [],
  });
});

app.get("/api/users/:userId", (req, res) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.query); // query params ?id=1&name=simanta
  console.log(req.params); // path param
  // console.log(req.headers);
  console.log(req.body);
  res.send("Hello");
});

// ep => /api/books/2024/publish/8
app.get("/api/books/:year/publish/:id", (req, res) => {
  //   console.log(req.method);
  //   console.log(req.path);
  //   console.log(req.query); // query params ?id=1&name=simanta
  //   console.log(req.params); // path param
  //   // console.log(req.headers);
  //   console.log(req.body);
  //   res.send("Hello");
  //   return res.send("Hello");

  //   return res.json({ message: "hello" });

  //   return res.status(200).json({
  //     success: true,
  //   });

  return res.redirect("/api/users");

  res.render("index", { title: "Home" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}!`);
});
