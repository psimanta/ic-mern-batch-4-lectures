const { Router } = require("express");
const router = Router();
const fs = require("fs");
const { validateUser } = require("../middlewares/validators");

router.get("/", (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Bad request",
    });
  }
});

router.post("/", validateUser, (req, res) => {
  try {
    const newUser = req.body;
    if (newUser) {
      const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));

      if (users?.some((u) => u?.id === newUser?.id)) {
        return res.status(400).json({
          message: "User with same id exists!",
        });
      }

      users.push(newUser);
      fs.writeFileSync("./users.json", JSON.stringify(users));
      res.status(201).json({
        message: "User create successfully!",
      });
    } else {
      res.status(400).json({
        message: "User data not given!",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Bad request",
    });
  }
});

module.exports = router;
