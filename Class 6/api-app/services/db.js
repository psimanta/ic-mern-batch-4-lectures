const fs = require("fs");

const getUsersFromFile = (path) => {
  return JSON.parse(fs.readFileSync(path, "utf8"));
};

const saveUsersInFile = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

module.exports = {
  getUsersFromFile,
  saveUsersInFile,
};
