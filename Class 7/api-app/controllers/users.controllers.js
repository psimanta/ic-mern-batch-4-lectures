const { ObjectId } = require("mongodb");
const { mongoClient, getUsersCollection } = require("../services/database");

const getUsers = async (req, res) => {
  try {
    const usersCollection = await getUsersCollection(mongoClient);
    const users = await usersCollection.find({}).toArray();
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
      const usersCollection = await getUsersCollection(mongoClient);
      const result = await usersCollection.insertOne({
        ...newUser,
      });
      console.log(result);
      return res.status(201).json({
        message: "User created successfully!",
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
  const usersCollection = await getUsersCollection(mongoClient);

  const userId = new ObjectId(id);

  const user = await usersCollection.findOne({
    _id: userId,
  });

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
    const usersCollection = await getUsersCollection(mongoClient);
    const userId = new ObjectId(id);

    const user = await usersCollection.findOne({
      _id: userId,
    });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    await usersCollection.updateOne(
      { _id: userId },
      {
        $set: updatedUser,
      }
    );

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
  const usersCollection = await getUsersCollection(mongoClient);
  const userId = new ObjectId(id);

  const user = await usersCollection.findOne({
    _id: userId,
  });

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  await usersCollection.deleteOne({
    _id: userId,
  });

  await usersCollection.findOneAndDelete;

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
