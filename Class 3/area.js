const secret = 123;

const a = 5;

module.exports = {
  getCircleArea: (r) => Math.PI * r * r,
  getSquareArea: (r) => r * r,
  a,
};

console.log("area", module.exports);
