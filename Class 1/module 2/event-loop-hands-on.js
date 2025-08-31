// Synchronous vs Asynchronous

// **** Example 1
// console.log("Start of program");

// setTimeout(() => {
//   console.log("Timer finished!");
// }, 0);

// console.log("I am running immediately!");

// console.log("End of program!");

// **** Example 2
console.log("First");

setTimeout(() => {
  console.log("First timeout!");

  setTimeout(() => {
    console.log("Nested timeout!");
  }, 0);
}, 0);

setTimeout(() => {
  console.log("Second timeout!");
});

console.log("Last!");

// Callback QUEUE (FIFO):

/*
First
Last
First timeout
Second timeout
Nested timout
*/

// **** Example 3
const fs = require("fs");
console.log("Starting file operation!");

fs.writeFileSync("test.txt", "Hello nodejs!");

setTimeout(() => {
  // thread 1
  console.log("I am a timer!");
}, 1000);

fs.readFile("test.txt", "utf8", (err, data) => {
  // thread 2
  console.log("File read: " + data);
});

console.log("Synchronous code finished!");

/*
A => 30min => kitchen
B => 30min => kitchen
*/
