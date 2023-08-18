const getArgs = (arg) => console.log('Got you:', arg);

process.argv.slice(2).map(getArgs);

const math = require('./math');

const square = (x) => x * x;
const add = (x, y) => x + y;
const PI = 3.14159;

exports.square = square;
exports.add = add;
exports.PI = PI;

module.exports = {
  PI: 3.14159,
  square: (x) => x * x,
  add: (x, y) => x + y,
};
