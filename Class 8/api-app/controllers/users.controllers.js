const { User } = require("../models/users.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Bad request",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    if (newUser) {
      const result = await User.create({
        name: newUser?.name,
        city: newUser?.city,
      });
      return res.status(201).json({
        message: "User created successfully!",
        result,
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
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  return res.status(200).json({
    user,
  });
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }
    await User.findByIdAndUpdate(id, updatedUser);

    return res.status(200).json({
      message: "Upadated successfully!",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Bad request",
    });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  await User.findByIdAndDelete(id);

  res.status(200).json({
    message: "User deleted successfully!",
  });
};

module.exports = {
  getUserById,
  getUsers,
  createUser,
  updateUserById,
  deleteUserById,
};
