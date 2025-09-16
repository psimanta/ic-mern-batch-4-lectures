const { Router } = require("express");
const router = Router();
const { Book } = require("../models/books.model");

router.post("/", async (req, res) => {
  const book = req.body;
  try {
    const result = await Book.create({
      ...(book || {}),
    });
    return res.status(201).json({
      success: true,
      message: "Book saved successfully!",
      book: result,
    });
  } catch (err) {
    console.error(err);
    const keys = Object.keys(err?.errors || {});
    res.status(400).json({
      success: false,
      message: err?.errors?.[keys[0]]?.message || "Bad request!",
    });
  }
});

module.exports = router;
