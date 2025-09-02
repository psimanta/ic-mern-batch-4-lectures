const { Router } = require("express");
const router = Router();

router.use((req, res, next) => {
  console.log("I am from books router");
  next();
});

router.get("/", (req, res) => {
  res.json({
    books: [],
  });
});

router.post("/", () => {});

router.get("/:id", (req, res) => {
  const bookId = req.params?.id;
  res.json({
    bookId,
  });
});

module.exports = router;
