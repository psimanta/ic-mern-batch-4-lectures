setTimeout(() => console.log("A"), 5000);

Promise.resolve().then(() => {
  console.log("B");
});

process.nextTick(() => console.log("C"));

setTimeout(() => console.log("D"), 0);

console.log("E");

Promise.resolve().then(() => console.log("F"));

// E;
// C;
// B;
// F;
// A;
// D;

// micro =>

// macro => timeout 1, timeout 2
