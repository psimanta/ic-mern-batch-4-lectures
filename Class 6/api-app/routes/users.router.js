const { Router } = require("express");
const router = Router();
const { validateUser } = require("../middlewares/validators");
const {
  getUserById,
  getUsers,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/users.controllers");

router.get("/", getUsers);

router.post("/", validateUser, createUser);

router.get("/:id", getUserById);

router.patch("/:id", updateUserById);

router.delete("/:id", deleteUserById);

module.exports = router;
