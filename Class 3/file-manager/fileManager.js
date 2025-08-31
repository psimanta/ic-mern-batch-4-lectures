// Create a Node.js script that can:
// 1. Create directories
// 2. Create and write to files
// 3. Read file contents
// 4. List directory contents
// 5. Watch for file changes

const fs = require("fs");
const path = require("path");

class FileManager {
  constructor(rootDir) {
    this.rootDir = rootDir;
    this.createRootDir();
  }

  createRootDir() {
    if (!fs.existsSync(this.rootDir)) {
      fs.mkdirSync(this.rootDir);
      console.log(`Created root directory: ${this.rootDir}`);
    }
  }

  createFile(fileName, content) {
    const filePath = path.join(this.rootDir, fileName);
    fs.writeFileSync(filePath, content);
    console.log(`Create file: ${fileName}`);
  }

  readFile(fileName) {
    const filePath = path.join(this.rootDir, fileName);
    try {
      const content = fs.readFileSync(filePath, "utf8");
      console.log(`Content of ${fileName}: ${content}`);
    } catch (error) {
      console.error("Error reading", fileName);
    }
  }

  listFiles() {
    const files = fs.readdirSync(this.rootDir);
    console.log("\nFiles in directory:");
    files.forEach((file) => {
      const stats = fs.statSync(path.join(this.rootDir, file));
      console.log(` - ${file} (${stats.isDirectory() ? "Directory" : "File"})`);
    });
  }

  watchDirectory() {
    console.log(`Watching for changes in ${this.rootDir}`);

    fs.watch(this.rootDir, (eventType, fileName) => {
      console.log(`Event: ${eventType} - File: ${fileName}`);
    });
  }
}

module.exports = FileManager;
