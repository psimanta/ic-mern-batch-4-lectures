const FileManager = require("./fileManager");

require("readline");

const manager = new FileManager("./managed-files");

manager.createFile("test.txt", "Hello World!");
manager.createFile("notes.md", "# My notes \n\nThis is a markdown file.");

manager.listFiles();

manager.readFile("test.txt");

manager.watchDirectory();

// 1. **Add More Features**
//    - Implement file deletion
//    - Add file copying functionality
//    - Create a backup system

// 2. **Error Handling**
//    - Add try-catch blocks
//    - Validate file names
//    - Check file permissions

// 3. **Async Version**
//    - Convert operations to use promises
//    - Implement async/await

// ## Bonus Challenge

// Create a simple command-line interface for the file manager:
