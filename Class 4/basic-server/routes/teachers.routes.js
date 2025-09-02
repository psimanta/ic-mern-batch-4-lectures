const express = require("express");
const router = express.Router();

// api/teachers/api/teachers
router.post("/", () => {});

router.get("/", (req, res) => {
  console.log("hello");
  res.json({
    teachers: [],
  });
});

module.exports = router;
