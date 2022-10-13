const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const operator = (process.argv[3]);
const y = Number(process.argv[4]);

if (operator === 'plus') {
  console.log('sum:', add(x, y));
} else if (operator === 'minus') {
  console.log('difference:', subtract(x, y));
} else if (operator === 'times') {
  console.log('product:', multiply(x, y));
} else if (operator === 'divide') {
  console.log('quotient:', divide(x, y));
} else {
  console.log('invalid operation');
}

// const equation = operator === 'plus' ? console.log('sum:', add(x, y)) : operator === 'minus' ? console.log('difference:', subtract(x ,y))
