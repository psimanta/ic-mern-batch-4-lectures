const { getUsersFromFile, saveUsersInFile } = require("../services/db");

const getUsers = (req, res) => {
  try {
    const users = getUsersFromFile("./users.json");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Bad request",
    });
  }
};

const createUser = (req, res) => {
  try {
    const newUser = req.body;
    if (newUser) {
      const users = getUsersFromFile("./users.json");

      if (users?.some((u) => u?.id === newUser?.id)) {
        return res.status(400).json({
          message: "User with same id exists!",
        });
      }

      users.push(newUser);
      saveUsersInFile("./users.json", users);
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
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const users = getUsersFromFile("./users.json");
  const user = users?.find((u) => String(u.id) === String(id));

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  return res.status(200).json({
    user,
  });
};

const updateUserById = (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const users = getUsersFromFile("./users.json");

    const user = users?.find((u) => String(u.id) === String(id));

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const updatedUsers = users?.map((u) => {
      if (String(u.id) === String(id)) {
        return {
          ...u,
          ...updatedUser,
        };
      }
      return u;
    });
    saveUsersInFile("./users.json", updatedUsers);
    return res.status(200).json({
      message: "Upadated successfully!",
    });
  } catch (err) {
    res.status(400).json({
      message: "Bad request",
    });
  }
};

const deleteUserById = (req, res) => {
  const { id } = req.params;
  const users = getUsersFromFile("./users.json");
  const user = users?.find((u) => String(u.id) === String(id));

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  const newUsers = users.filter((u) => String(u.id) !== String(id));
  saveUsersInFile("./users.json", newUsers);

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
