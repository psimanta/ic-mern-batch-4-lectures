const name = process.argv[2] || "Anonymous Developer";
const favProLang = process.argv[3] || "Javascript";

console.log(`Hello ${name}`);
console.log(`You like ${favProLang}`);

process.argv.forEach((arg, index) => {
  console.log(`   [${index}]: ${arg}`);
});

console.log("Your Username:", process.env.USER);
