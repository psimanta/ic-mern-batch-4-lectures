console.log("Welcome to nodejs!");
console.log("Running on: ", process.platform);
console.log("Current directory: ", process.cwd());
console.log("Node.js version: ", process.version);

const os = require("os");
console.log("Your computer has ", os.cpus().length, " CPU cores");
console.log(
  "Total memory:",
  Math.round(os.totalmem() / 1024 / 1024 / 1024),
  "GB"
);
